class square :
    def __init__(self,edge):
        self.edge = edge
    def cal_area(self):
        return self.edge**2
class cube(square):
    def __init__(self, edge):
        square.__init__(self,edge)
    def cal_area(self):
        return self.edge**2*6
    def cal_volume(self):
        return self.edge**3
value = float(input("value ? :"))
square_ = square(value)
print("square area: ", square_.cal_area())
Cube = cube(value)
print("Cube area: ", Cube.cal_area())
print("cube volume: ", Cube.cal_volume())
#