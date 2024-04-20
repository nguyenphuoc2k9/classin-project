
#include <Wire.h>
#include "MAX30105.h"
#include "heartRate.h"
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SH110X.h>
#include <SoftwareSerial.h>
#include <Sim800l.h>
#include <TinyGPS++.h>
#define SS_RXD                                D3
#define SS_TXD                                D4
TinyGPSPlus gps;
SoftwareSerial mygps(SS_RXD, SS_TXD);
SoftwareSerial ss(SS_RXD, SS_TXD);
Sim800l sim(&ss);
Adafruit_SH1106G srituhobby = Adafruit_SH1106G(128, 64, &Wire);
MAX30105 particleSensor;
static const unsigned char PROGMEM image_network_not_connected_bits[] = {0x82, 0x0e, 0x44, 0x0a, 0x28, 0x0a, 0x10, 0x0a, 0x28, 0xea, 0x44, 0xaa, 0x82, 0xaa, 0x00, 0xaa, 0x0e, 0xaa, 0x0a, 0xaa, 0x0a, 0xaa, 0x0a, 0xaa, 0xea, 0xaa, 0xaa, 0xaa, 0xee, 0xee, 0x00, 0x00};
static const unsigned char PROGMEM image_network_4_bars_bits[] = {0x00, 0x0e, 0x00, 0x0e, 0x00, 0x0e, 0x00, 0x0e, 0x00, 0xee, 0x00, 0xee, 0x00, 0xee, 0x00, 0xee, 0x0e, 0xee, 0x0e, 0xee, 0x0e, 0xee, 0x0e, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0x00, 0x00};
const byte ir_size = 10;
byte ir[ir_size];
byte ir_index = 0;
const byte RATE_SIZE = 4;
byte rates[RATE_SIZE];
byte rateSpot = 0;
long lastBeat = 0;
float beatsPerMinute = 0;
int beatAvg;
int sdnn;
float rmssd;
int user_status = 1;
float lfhf = 0;
int value;
int address = 1;
int read;
float sumsdnn = 0;
int nummearsurement = 0;
float sdnnavg = 0;
char* msg;
char* phoneNo;
double lattitude;
int stress;
bool sim_status;
double longtitude;
char buffer[20];
void setup()
{

  srituhobby.begin(0x3C,true);
  srituhobby.clearDisplay();
  Serial.begin(115200);
  sim.begin(19200);
  Serial.println("Delay tới khi module sim khởi tạo xong");
  Serial.println("Khởi tạo kết nối module sim ...");
  phoneNo = "0905332540";

  if (sim.getSimPin() == sim.SIMREADY) {
      sim_status=true;
  }
  else Serial.println("Chưa kết nối với module sim");
  

  // Initialize sensor
  if (!particleSensor.begin(Wire, I2C_SPEED_FAST))
  {
    Serial.println("MAX30105 was not found. Please check wiring/power. ");
    while (1);
  }
  Serial.println("Place your index finger on the sensor with steady pressure.");
  mygps.begin(9600);
  particleSensor.setup();
  particleSensor.setPulseAmplitudeRed(0x0A);
  particleSensor.setPulseAmplitudeGreen(0);
}

void loop()
{
          msg = "User is currently stress, try to relax.";
       phoneNo = "0905332540";
        int16_t ret = sim.SendSMS(phoneNo, msg);
  srituhobby.setTextSize(1);
  srituhobby.setTextWrap(false);
  srituhobby.setCursor(83, 51);
  srituhobby.print("SIM:");

  if (mygps.available() > 0) {
    gps.encode(mygps.read());
    if (gps.location.isUpdated()) {
      Serial.print("Latitude= ");
      Serial.print(gps.location.lat(), 6);
      Serial.print(" Longitude= ");
      Serial.println(gps.location.lng(), 6);
      lattitude = gps.location.lat();
      longtitude = gps.location.lng();
    }
  }
  if (sim_status == true) {
    srituhobby.drawBitmap(109, 45, image_network_4_bars_bits, 15, 16, 1);
  } else {
    srituhobby.drawBitmap(109, 45, image_network_not_connected_bits, 15, 16, 1);
  }

  long irValue = particleSensor.getIR();

  if (checkForBeat(irValue) == true && irValue > 50000)
  {
    long delta = millis() - lastBeat;
    lastBeat = millis();

    beatsPerMinute = 60 / (delta / 1000.0);

    if (beatsPerMinute < 255 && beatsPerMinute > 20)
    {
      rates[rateSpot++] = (byte)beatsPerMinute;
      rateSpot %= RATE_SIZE;

      beatAvg = 0;
      for (byte x = 0 ; x < RATE_SIZE ; x++)
        beatAvg += rates[x];
      beatAvg /= RATE_SIZE;
    }
    if (ir_index < ir_size) {
      ir[ir_index] = irValue;
      ir_index++;
    } else {


      sdnn = calculate_sdnn(ir, ir_size);
      rmssd = calculate_rmssd(ir, ir_size);

      ir_index = 0;
    }
  }

  Serial.print("IR=");
  Serial.print(irValue);
  Serial.print(", BPM=");
  Serial.print(beatsPerMinute);
  Serial.print(", Avg BPM=");
  Serial.print(beatAvg);
  Serial.print(",SDNN=");
  Serial.print(sdnn);
  Serial.print(",RMSSD=");
  Serial.print(rmssd);
  Serial.print(",LF/HF=");
  Serial.print(lfhf);
  Serial.print("status:");
  if (irValue < 50000)
    Serial.print(" No finger?");
  if (sdnn != 0 && rmssd != 0) {
    if (sdnn <= 50 && rmssd <= 50) {
      if (sdnn <= 20 && rmssd <= 20) {
        user_status = 3;
        Serial.print("Extreme mind state");
      } else {
        user_status = 2;
        Serial.print("Stress");
      }
    } else {
      user_status = 0;
      Serial.print("Normal");
    }
  }

  
  srituhobby.setCursor(0, 0);
  srituhobby.setTextSize(2);
  srituhobby.setTextColor(SH110X_WHITE);
  srituhobby.print("BPM :");
  srituhobby.print(beatAvg);

  srituhobby.setCursor(0, 20);
  srituhobby.setTextSize(1);
  //Serial.print(sumsdnn);
  //Serial.print(nummearsurement);
  if (sdnn != 0 && rmssd != 0) {
    sumsdnn += sdnn;
    nummearsurement += 1;
    if (nummearsurement >= 100) {
      sdnnavg = sumsdnn / nummearsurement;
      Serial.print("Average sdnn");
      Serial.print(sdnnavg);
      nummearsurement = 0;
      sumsdnn = 0;
    }
    if ( sdnnavg > 0) {
      if (sdnnavg < 60 ) {
        user_status = 2;
        srituhobby.print("Stress");
        stress += 1;
        msg = "User is currently stress, try to relax.";
       phoneNo = "0905332540";
        int16_t ret = sim.SendSMS(phoneNo, msg);
      } else if (sdnnavg <= 20) {

        msg = "You need to be as calm as possible, don't do anything foolish.";
          phoneNo = "0905332540";
        int16_t ret = sim.SendSMS(phoneNo, msg);
        user_status = 3;
        srituhobby.print("Extreme mind state");
      } else {
        user_status = 0;
        srituhobby.print("Normal");
      }
    }


  } else {
    srituhobby.print("Status onloading");
  }
  srituhobby.display();
  srituhobby.clearDisplay();
  Serial.println();
}
float calculate_rmssd(byte* intervals, int size) {
  float rmssd_total = 0;
  for (int i = 0; i < size; i++) {
    rmssd_total += intervals[i];
  }
  float rmssd_mean = rmssd_total / size;
  float square_sum = 0;
  for (int i  = 0; i < size; i++) {
    square_sum += pow(intervals[i] - rmssd_mean, 2);
  }
  float rmssd = sqrt(square_sum / size);
  return rmssd;
}
int calculate_sdnn(byte* intervals, int size) {
  int sum = 0;
  for (int i = 0; i < size; i++) {
    sum += intervals[i];
  }
  int mean = sum / size;
  int sumSquaredDiff = 0;
  for (int i = 0; i < size; i++) {
    sumSquaredDiff += sq(intervals[i] - mean);
  }

  int sdnn = int(sqrt(sumSquaredDiff / (size - 1)));
  return sdnn;
}
