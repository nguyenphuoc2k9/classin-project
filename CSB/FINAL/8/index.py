x = int(input("Input a number :"))
nums = [1,1]
if x == 1:
    print(f"First {x} Fibonacci numbers : 1")
else :
    for i in range(x):
        sum = 0
        count = 1
        for i in range(count,len(nums)):
            try :
                sum = nums[i] + nums[i-1]
                count+=1
            except :
                sum = nums[i]
        if count == x:
            break
        nums.extend([sum])
    print(f"First {x} Fibonacci numbers : ")
    for i in nums:
        print(i, end=" ")