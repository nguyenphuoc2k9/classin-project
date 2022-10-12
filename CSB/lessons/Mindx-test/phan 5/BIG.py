import random
from traceback import print_tb


print("== Freaking Math Console ==")
print("Give correct answers to get scores")
score = 0
i = 0
while i < 4:
    number1 = random.randint(0, 100)
    number2 = random.randint(0, 100)
    r_or_w = random.randint(0,1)
    if r_or_w == 0 :
        an = number1 + number2    
    if r_or_w == 1 :
        an = random.randint(0,100)
    print(f"{number1} + {number2} = {an}")
    user_an = input("True or False :")
    if (user_an == "True" and number1 + number2 == an) or (user_an == "False" and number1 + number2 != an):
        score +=1
        print(f"score :{score}")
    else :
        print("Incorrect")
    i += 1
print("== Game Over ==")
print(f"score :{score}")