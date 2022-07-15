program hm;
uses Crt;
var thongbao:String;
    thanhtien:Real;
var soluong : array[1..3] of Integer = (20,200,123);
var dongia : array[1..3] of Integer = (1000,3500,18500);
const test  = 1;
const test2  = 35000;
var i:Integer;
const phi = 1000;
begin
    clrscr;
    thongbao:='tong so tien phai tra :';
    for i := 1 to 3 do
      begin
        thanhtien:= soluong[i]*dongia[i]+phi;
        WriteLn(thongbao,thanhtien:10:2);
        delay(0)
      end;
    writeln(thongbao,test*test2+phi);
      Readln;
end.