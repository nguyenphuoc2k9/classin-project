x= int(input("Input number of edges:"))
from turtle import Turtle
from turtle import *

t = Turtle()
if x > 2 and x % 1 ==0:
    total = (x-2)*180
    deg = total/x
    i = 0
    while i < x:
        t.backward(100)
        t.right(180-deg)
        i +=1
        

        
done()