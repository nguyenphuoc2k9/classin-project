class circle:
    def __init__(self,radius):
        self.radius = radius
    def cal(self):
        print("diện tích :", (self.radius**2)*3.14)
        print("chu vi :", self.radius*2*3.14)
class rectangle :
    def __init__(self,width,height):
        self.width = width
        self.height = height
    def cal(self):
        print("diện tích : ", self.width*self.height)
        print("chu vi : ", (self.width+self.height)*2)
shape = input("shape(rectangle|circle):")
if shape.lower() == "rectangle" or shape == "rectangle":
    width = float(input("Width :"))
    height = float(input("Height :"))
    rectangle(width,height).cal()
elif shape.lower() == "circle" or shape == "circle":
    radius = float(input("Radius :"))
    circle(radius).cal()
else : 
    print("try again later.")