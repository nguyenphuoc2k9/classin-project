x = int(input("yOUR NUMBER :"))
if x % 3 ==0 and x % 5 ==0 :
    print(f"{x} is divinsible by 3 and 5")
if x % 3 and x % 5 != 0 :
    print(f"{x} is divinsible by 3")
if x % 5 == 0 and x % 3 != 0:
    print(f"{x} is divinsible by 5")
if x % 5 != 0 and x % 3 != 0 :
    print(f"{x} is not divinsible by 5 and 3")
