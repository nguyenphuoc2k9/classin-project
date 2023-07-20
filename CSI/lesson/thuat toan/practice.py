# arr_1 = input('array 1 :').split(' ')
# arr_2 = input('array 2 :').split(' ')
# sample = []
# for i in arr_1+arr_2:
#     sample.extend([int(i)])
# sample.sort(reverse=True)
# print(sample)

student_grade_list = [
    {'id': 984, 'math': 9.0, 'literature': 5.4},
    {'id': 12, 'math': 9.5, 'literature': 4.3},
    {'id': 324, 'math': 9.7, 'literature': 5.3},
    {'id': 890, 'math': 5.0, 'literature': 7.6},
    {'id': 223, 'math': 7.6, 'literature': 5.3},
    {'id': 543, 'math': 7.2, 'literature': 7.7},
]

def mergeSort(array):
    if len(array) > 1:

        r = len(array)//2
        L = array[:r]
        M = array[r:]


        mergeSort(L)
        mergeSort(M)

        i = j = k = 0


        while i < len(L) and j < len(M):
            if L[i]['math'] < M[j]['math']:
                array[k] = L[i]
                i += 1
            else:
                array[k] = M[j]
                j += 1
            k += 1

        while i < len(L):
            array[k] = L[i]
            i += 1
            k += 1

        while j < len(M):
            array[k] = M[j]
            j += 1
            k += 1
mergeSort(student_grade_list)
print(student_grade_list)
        