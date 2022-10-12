x = int(input("Input number of edges :"))
if x % 1 == 0 and x > 0:
    from turtle import Turtle
    from turtle import *
    t = Turtle()
    fun = (x-2)*180
    len = fun/x
    i = 0
    while i < x:
        t.backward(100)
        t.right(180-len)
        i +=1
done()