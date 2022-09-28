admin = "admin"
password = "12345"
print("Welcome to Ultimate Sercurity System")
username = input("Enter your username :")
userpass =  input("Enter your password :")
if admin == username and password == userpass:
    print("You are logged in, admin")
else :
    print("Wrong username or password")