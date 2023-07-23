def counting_sort(arr):
  max_value = max(arr)
  lowest_value = min(arr)
  count = [0] * (max_value+1)

  for i in arr:
    count[i] +=1
  index = 0
  index_2 = 0
  for i in range(lowest_value,max_value+1,1):
    
    for j in range(count[index_2]):
      arr[index] = i
      index+=1
    index_2 += 1
number_list = [-47, -10, 70, -3, 33, 18, 56, -54, 49, 65]

counting_sort(number_list)