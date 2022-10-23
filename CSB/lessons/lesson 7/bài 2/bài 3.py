xd= ['blue','teal','green','yellow']
from turtle import Turtle
from turtle import *
t = Turtle()
for x in xd :
    t.pendown()
    t.pencolor(x)
    t.forward(50)
    t.penup()
    t.forward(10)
done()