str = input("Enter a string :")
def is_palinedrom(x):
    str2 = x[::-1]
    if x == str2:
        print("This is a palinedrom string")
    else :
        print("This isn't a palinedrom string")
is_palinedrom(str)