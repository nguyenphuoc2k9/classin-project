x = int(input("input a number :"))
count = 0
while x != 0:
    x//=10
    count+=1
print("Numbers of digit :", count)