x = float(input("Enter a number :"))
def is_int(x):
    if x % 1 == 0:
        return True
    else :
        return False        
if is_int(x):
    print(f"{x} is an integer")
else :
    print(f"{x} isn't an integer")