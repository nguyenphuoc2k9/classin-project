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
email = input("Email :")
if user != "" and p != "" and email != "":
    print("Registration successfuly")  
else :
    print("Input cannot be blank")