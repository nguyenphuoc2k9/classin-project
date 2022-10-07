x = int(input("Enter your number :"))
i = 1
full = 1
if x != 0 and x > 0:
    for i in range(2,x+1):
        full = full * i
elif x == 1:
    print("1")
else:
    print("Invalid")
print(full)