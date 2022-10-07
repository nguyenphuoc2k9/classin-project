x=  int(input("Digit :"))
i = 0
sum = 0
while x != 0:
    sum = sum + (x%10)
    x = x//10
print(sum)
    