nums = [5,1,8,92,-1,30]
x = int(input("Input a number :"))
if x not in nums :
    print("Number not found")
else:
    po = nums.index(x)+1
    print(f"Number found at position {po}")