nums = input("Input your numbers :")
num_list = nums.split(" ")
print("Even numbers is :", end =" ")
for i in num_list:
    num = int(i)
    if num %2 == 0:
        print(num, end = " ")
    
    