print('Numbers with sum of digits = 9:')
count = 0
num = 1000
while count < 10:
  sum = 0
  num2 = num
  while num2 > 0:
    sum += num2 % 10
    num2 //= 10
  if sum == 9:
    count += 1  
    print(num, end=' ') 
  num += 1