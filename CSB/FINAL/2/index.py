import math
a = float(input("input a:"))
b = float(input("input b:"))
c = float(input("input c:"))
try :
    que = (-(b) + math.sqrt(b**2 - 4*(a*c)))/2*a
    print(f"The equation has 2 solutions.")
    print(f"x = -{float(que)} or x = {float(que)}")
except:
    print("x has no solution")
