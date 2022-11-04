nums = [2,4,35,7,0,"lol","XD",2]
def sum(array):
    total = 0
    for i in array :
        if isinstance(i, int) == True:
            total += i
    print(total)
sum(nums)