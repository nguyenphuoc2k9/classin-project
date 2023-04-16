class rectangle :
    def __init__(self,width,height):
        self.width = width
        self.height = height
    def __str__(self):
        return f"Rectangle object with height = {self.height} and width {self.width}"
    def cal(self):
        print("diện tích : ", self.width*self.height)
        print("chu vi : ", (self.width+self.height)*2)
print(rectangle(width=1,height=2))