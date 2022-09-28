# a = 30
# e =20 
# if a < e:
#     print("High Diffrent")
# else :
#     print("Low Diffrent")
# c = int(input("Input the outside Degrees :"))
# if c > 25 :
#     print("You should go to the mountain")
# if c > 20 and c < 25 :
#     print("You should go to the swimming pool")
# if c <  20 :
#     print("You should stay at home")
# else : 
#     print("Input value error")
    
# mass = input("Enter your mas :")
# height = input("Enter your height :")
# bmi = float(mass)/(float(height)*float(height))
# if bmi > 17 and bmi < 18.5 :
#     print("You are mild thinness")
# if bmi > 18.5 and bmi < 25:
#     print("You are Normal")
# if bmi > 25 and bmi < 30:
#     print("You are overweight")
# else :
#     print("iNVALID BMI STATS")

year =  int(input("Year :"))
if(((year % 4 == 0) and (year % 100 != 0)) or (year % 400 == 0)):
    print("đây là năm nhuận")
else :
    print("đây không phải là năm nhuận")