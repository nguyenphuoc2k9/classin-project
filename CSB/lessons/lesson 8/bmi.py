weight = float(input("Enter your weight :"))
height =  float(input("Enter your height :"))
def bmi(weight, height):
    bmi = weight/height**2
    print(bmi)
bmi(weight, height)