string = input("Input a string :")
def is_palindrome(str):
    if str[::-1] == str :
        print("this is  a palindrome string")
    else :
        print("This isn't a palindrome string")
is_palindrome(string)