nums = [5, 1, 8, 92, -1, 30]
print("Original list:")
for i in range(0,len(nums)):
    print(nums[i] , end = " ")
print()
print("Sorted list:")
for i in range(1,len(nums)):
    print(nums[-i] , end = " ")