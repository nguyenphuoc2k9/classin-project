




mon = int(input("Input a month :"))
date31 = [1,12,3,10,5,8,7]
date30 =[11,4,9,6]
date29_28 = 2
if mon <= 12 :
    if mon != 2:
        
        if date31.index(mon) != "":
            print("this month has 31 days")
        elif date30.index(mon) == mon :
            print("this month has 30 days")
    else :
        print("this month has 29 days or 28 days")
    