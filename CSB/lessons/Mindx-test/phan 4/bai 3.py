




print("== Registration ==")
user = input("Username :")
p = input("Password :")

i = 0
count = 1
while i < count :
    re_pass = input("Confirm password :")
    if re_pass != p :
        print("Incorrect confirm password")
        count += 1
    else :
        break
y = 0
count2 = 1
while y < count :
    
    email = input("Email :")
    if user != "" and p != "" and email != "":
        if "@" in email and "." in email :
                
                if len(p) >= 8 and p.find("[0-9]+") != "":
                    
                    print("Registration successfuly")
                    break
                else :
                    
                    print("Invalid password")
                    while i < count2 :
                        p = input("Password :")
                        if len(p) >= 8 and p.find("[0-9]+") != 0:
                    
                            print("Registration successfuly")
                            break
                        else :
                            print("Invalid password")
                            count2 +=1
                
        else :
            count += 1
            print("email must contain @ and .")   
    else :
        print("Input cannot be blank")
        count += 1