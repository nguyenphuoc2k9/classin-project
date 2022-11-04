string = input("Enter String:")
str_list = string.split(",")
def sort(str):
    str.sort()
    for i in str:
        print(i,end =",")
sort(str_list)