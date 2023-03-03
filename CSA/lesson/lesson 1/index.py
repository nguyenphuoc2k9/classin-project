# class myclass:
#     def __init__(self, name, ID):
#         self.name = name
#         self.ID = ID
#     def call(self):
#         return "Mã sinh viên : {0}, tên sinh viên : {1}".format(self.name, self.ID)
# s1 = myclass("phước", 10)
# print(s1.call())
import math
checkagain = False
class tam_giac :
    def __init__(self,edge_1,edge_2,edge_3):
        self.edge_1 = edge_1
        self.edge_2 = edge_2
        self.edge_3 = edge_3
    def result(self):
        a = self.edge_1
        b = self.edge_2
        c=  self.edge_3
        print("chu vi :", self.edge_1 + self.edge_2 + self.edge_3)
        print("diện tích : ", round(1/4*math.sqrt((a+b+c)*(a+b-c)*(b+c-a)*(c+a-b)),2))
class hcn : 
    def __init__(self,height, width):
        self.height = height
        self.width = width
    def result(self):
        print("chu vi :", (self.height+self.width)/2)
        print("diện tích  :", self.height*self.width)
class hv :
    def __init__(self,edge):
        #30 giay
        self.edge = edge
    def result(self):
        print("chu vi :", self.edge*4)
        print("diện tích :", self.edge**2)
class circle :
    def __init__(self, radius):
        self.radius = radius
    def result(self):
        print("chu vi :", self.radius*2*3.14)
        print("diện tích :", self.radius**2*3.14 )
hinh = input("what kind of shape do you want to calculate ?(NOTE : ONLY TYPE RECTAGLE, TRIANGLE, SQUARE OR CIRCLE) :")
if hinh == "RECTAGLE" :
    height = float(input("Please input your shape's height length :"))
    width = float(input("Please input your shape's width length :") )
    s1 = hcn(height,width).result()
elif hinh == "TRIANGLE" :
    edge_1 = float(input("Please input your shape's edge 1 length :"))
    edge_2 = float(input("Please input your shape's  edge 2 length:"))
    edge_3 = float(input("Please input your shape's  edge 3 length:"))
    s1 = tam_giac(edge_1, edge_2,edge_3).result()
elif hinh == "SQUARE":
    edge = float(input("Please input your shape's edge length :")) 
    s1 = hv(edge).result()
elif hinh == "CIRCLE" :
    radius = float(input("Please input your shape's radius :"))
    s1 = circle(radius).result()
else :
    print("please try again later !!")