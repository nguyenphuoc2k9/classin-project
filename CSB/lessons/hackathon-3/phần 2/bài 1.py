x = int(input("Enter a number :"))
def tinhgiaithua(x):
    total = 1
    for i in range(1,x+1):
        total*=i
    print(total)
tinhgiaithua(x)