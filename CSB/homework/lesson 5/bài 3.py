a = int(input("Num 1 :"))
b = int(input("Num 2 :"))
odd = 0
even  = 0
for i in range(a,b+1,1):
    if i % 2 == 0:
        even +=1
    else :
        odd +=1
print(f"number of even numbers {even}")
print(f"number of odd numbers {odd}")