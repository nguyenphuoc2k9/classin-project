x = int(input("Enter a number :"))
def is_prime(x):
    count = 0
    for i in range(1,x+1):
        if x % 1 == 0 and x % i == 0:
            count += 1
    if count == 2 :
        print(f"{x} is a prime number")
    else :
        print(f"{x} is not a prime number")
is_prime(x)