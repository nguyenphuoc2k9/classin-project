x = int(input("Enter a number :"))
def num(x):
    list = []
    i = 1
    while True:
        count = 0
        for y in range(1,i+1):
            if i%y == 0:
                count+=1
        if count == 2:
            list.append(i)
        if len(list)==x:
            break
        i+=1
    print(list)    
num(x)