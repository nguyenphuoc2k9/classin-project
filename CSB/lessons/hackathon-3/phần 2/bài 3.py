x = int(input("Enter a number :"))
def print_fibo(x):
    arr = [1,1]
    if x > 0:
        
        if x == 1:
            print(f"First {x} fibonacci numbers")
        elif x == 2:
            print(f"First {x} fibonacci numbers")
        else :
            for i in range(0,x-2):
                arr.extend([arr[i]+arr[i+1]])
            print(f"First {x} fibonacci numbers :")
            for i in arr :
                print(i,end=" ")
print_fibo(x)
            