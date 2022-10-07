from turtle import Turtle
from turtle import *
t = Turtle()

i= 0
while i < 100:
    t.circle(2+i, 80)
    t.speed(100)
    t.pencolor("red")
    if i >= 25:
        t.pencolor("green")
    if i >= 50 :
        t.pencolor("blue")
    if i >= 75:
        t.pencolor("cyan")
    i +=2
done()