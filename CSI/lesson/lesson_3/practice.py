arr_1 = input('array 1 :').split(' ')
arr_2 = input('array 2 :').split(' ')
sample = []
for i in arr_1+arr_2:
    sample.extend([int(i)])
sample.sort(reverse=True)
print(sample)