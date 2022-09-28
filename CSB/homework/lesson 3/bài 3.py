from pickle import TRUE


x = input("Your character :")
if x.isnumeric() == True :
    print(f"{x} is a digit")
if x.isnumeric() == False :
    print(f"{x} is not a digit")