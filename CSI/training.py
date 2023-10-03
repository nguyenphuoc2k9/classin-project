# A : find
##linear find
num_list = list(range(23,0,-1))
def linear_find(num):
    for i in num_list:
        if i  == num:
            return num_list.index(i)
##binary find

def binary_find(num):
    left = 0
    right  =len(num_list)-1
    
    while left <= right:
        mid = (left+right)//2
        mid_item = num_list[mid]
        if mid_item < num:
            left +=1
        elif mid_item > num:
            right +=1
        else:
            return mid
# B : sort
##selection sort

def selection_sort(list):
    size = len(list)
    for i in range(size):
        min_index = i
        for x in range(min_index +1,size):
            if list[x] < list[min_index]:
                min_index = x
        list[min_index],list[i] = list[i],list[min_index]
    return list

## bubble sort
def bubble_sort(list):
    for i in range(len(list)-1,0,-1):
        for j in range(i):
            if list[j] > list[i]:
                list[j],list[i] = list[i],list[j]
    return list

## insertion sort
def insertion_sort(list):
    
    for i in range(1,len(list)):
        key = list[i]
        j = i -1
        while j <= 0 and key < list[j]:
            list[j +1] = list[j]
            j = j -1
        list[j+1] = key
    return list
## merge sort

