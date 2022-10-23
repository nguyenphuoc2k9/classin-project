string = input("Input your numbers :")
numlist = string.split(" ")
total = 0
for i in numlist :
    num = int(i)
    total += num
print(total)