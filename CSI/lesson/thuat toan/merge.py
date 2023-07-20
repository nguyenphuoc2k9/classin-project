def mergeSort(arr):
    mid = len(arr)//2
    arr1 = arr[:mid]
    arr2 = arr[mid:]
    
    mergeSort(arr1)
    mergeSort(arr2)
    i = j = k =0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            arr[k] = arr1[i]
            i+=1
        else:
            arr[k] = arr2[j]
            j+=1
        k+=1
    while i < len(arr1):
        arr[k] = arr1[i]
        i+=1
        k+=1
    while j < len(arr2):
        arr[k] = arr2[j]
        j+=1
        k+=1
array = [6, 5, 12, 10, 9, 1]
merge(array)
print(array)