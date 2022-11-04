x = int(input("Enter a number :"))
def num(x):
    i = 1
    list = []
    while i < 3:
        count = 0
        for y in range(1,i):
            if i%1 == 0 and i%y == 0:
                count += 1
        if count == 2:
            list.extend([i])
        i+=1
    print(list)
num(x)