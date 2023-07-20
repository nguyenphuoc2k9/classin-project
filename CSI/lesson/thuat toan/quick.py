# def partition(arr):
#     chosen_element = arr[len(arr)-1]
#     left = arr.index(chosen_element)
#     right = arr.index(chosen_element)
#     for i in range(0,len(arr)-1):
#         if arr[i] > chosen_element:
#             right+=1
#             arr[i] == arr[i+1]
             
# def partition(arr,left,right):
#     pivot = arr[left]
#     i = left
#     for j in range(left+1,right):
#         if arr[j] < pivot:
#             i+=1
#             arr[i],arr[j] = arr[j],arr[i]
#     arr[i],arr[left] = arr[left],arr[i]
#     return i
# def quick_sort(arr,left,right):
#     if right-left  <= 1:
#         return
#     partition_index = partition(arr,left,right)
#     quick_sort(arr,left,partition_index)
#     quick_sort(arr,partition_index+1,right)
# number_list = [5, 9, 1, 12, 30, 35, 75, 10, 15, 20, 4, 0, 20, 0, 20, 3, 6, 14]
# quick_sort(number_list,0,len(number_list))
# print(number_list)
student_grade_list = [
    {'id': 984, 'math': 9.0, 'literature': 5.4},
    {'id': 12, 'math': 9.5, 'literature': 4.3},
    {'id': 324, 'math': 9.7, 'literature': 5.3},
    {'id': 890, 'math': 5.0, 'literature': 7.6},
    {'id': 223, 'math': 7.6, 'literature': 5.3},
    {'id': 543, 'math': 7.2, 'literature': 7.7},
]

def merge(arr):
    mid = len(arr)//2
    A = arr[:mid]
    B= arr[mid:]
    
    
    merge(A)
    merge(B)
    i = j = k= 0
    while i < len(A) and j < len(B):
        if A[i]['math'] < B[j]['math']:
            arr[k] = A[i]
            i+=1
        else:
            arr[k] = B[j]
            j+=1
        k+=1
    while i < len(A):
        arr[k] = A[i]
        i+=1
        k+=1
    while j < len(B):
        arr[k] = B[j]
        j+=1
        k+=1
merge(student_grade_list)
print(student_grade_list)
        