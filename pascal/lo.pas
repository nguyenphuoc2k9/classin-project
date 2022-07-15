Program lo;
var x,y,z : Integer;
begin
    Readln(x,y);
    WriteLn(x,' ',y);
    z:=x;
    x:=y;
    y:=z;
    WriteLn(x,' ',y);
    readln;
end.