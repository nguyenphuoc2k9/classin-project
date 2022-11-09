str = input("Enter a text :")
def reverse_str(x):
    print("Result :",end='')
    i = len(x)-1
    while i >= 0:
        print(x[i],end='')
        i-=1
reverse_str(str)