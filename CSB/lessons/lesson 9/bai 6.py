string = input("Input string :")
str_arr = []
for i in string:
    str_arr.extend([i])
list = []
dict = {}
for i in str_arr:
    list.extend([i])
    string_of = str(i)
    dict[string_of] = 0
    for x in list:
        if x == i :
            dict[string_of] = dict[string_of] + 1
print("Frequency of character :")
print(dict)