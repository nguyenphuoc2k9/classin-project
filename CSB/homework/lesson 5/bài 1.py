x = int(input("Input a number :"))
div = 0
if x % 1 == 0:
    for i in range(1,x+1,1):
        
        if x % i == 0:
            div += 1
    if div == 2:
        print(f"{x} is a prime number")
    elif div >= 3 : 
        print(f"{x} is not a prime number")