len1 = int(input("Enter length 1:"))
len2 = int(input("Enter length 2:"))
len3  = int(input("Enter length 3:"))
from turtle import Turtle
from turtle import *
t = Turtle()
if (len1 + len2 > len3) or (len1 + len2 > len3) or (len2 + len3 > len1):
    if len1 == len2 == len3 :
        print("Can form a equilateral triangle")
        t.backward(len1)
        t.right(120)
        t.backward(len2)
        t.right(120)
        t.backward(len3)
        done()
    if len1**2 + len2**2 == len3**2 or len2**2 + len3**2 == len1**2 or len1**2 + len3**2 == len2**2:
        print("Can form a right triangle")
else :
    print("The 3 line segments cannot form a triangle")
