x = int(input('Enter your number :'))
def tinhgiaithua(x):
    list  =[]
    if x == 1 or x==2:
        print(f"Result : {x}")
    else :
        total = 0
        for i in range(1,x+1):
            giaithua = 1
            for y in range(1,i+1):
                giaithua*=y
            list.append(giaithua)
        for l in list:
            total+=l
        print(list)
        print(f"Result :{total}")
tinhgiaithua(x)