x = int(input("Input a positive number :"))
if x %1 == 0:
    arr = [1,1]
    result = None
    if x == 1:
        print(f"First {x} Fibonacci number(s) : 1")
    elif x == 2:
        print(f"First {x} Fibonacci number(s) : 1 1")
    else :
        for i in range(1,x-1):
            arr.extend([arr[i]+arr[i-1]])
        print(f"First {x} Fibonacci number(s) : ", end = "")
        for ele in arr:
            print(ele , end= " ")
        