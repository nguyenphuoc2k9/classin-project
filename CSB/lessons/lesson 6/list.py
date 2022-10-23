# lis = list(("dasd","dasdasd","dasdasd"))
# lis2 = ["dasdasd","dasdasd","dasdasd"]
# lis.append("dasdasd")
# print(lis)
# print(lis2[0])


food = []
while True:
    food.append(input("Enter your food :"))
    print(food)
    con = input("Continue ?, Y/N :")
    if con == "Y":
        continue
    elif con == "N":
        for i in food :
            print(i)
        re = input("What food do you want to remove?")            
        food.remove(re)
    else :
        print("Only Y and N are allowed")
        con = input("Continue ?, Y/N :")
    
    