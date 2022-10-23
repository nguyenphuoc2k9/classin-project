import math
a = float(input("A :"))
b  = float(input("B :"))
c = float(input("C :"))
deltablabla = b**2 - 4*a*c
if deltablabla > 0 :
    print("x_1 =", (-b+ math.sqrt(deltablabla))/(2*a))
    print("x_2 =", (-b- math.sqrt(deltablabla))/(2*a))
elif deltablabla == 0:
    print("x_1=x_2= ," -b/(2*a))
else :
    print("x = empty")