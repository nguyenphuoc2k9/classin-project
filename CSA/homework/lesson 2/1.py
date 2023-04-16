from fractions import Fraction
class fraction:
    def __init__(self,x,y):
        self.x = x
        self.y = y
    def _add_(self,x2,y2):
        return Fraction(self.x,self.y) + Fraction(x2,y2)
    def _sub_(self,x2,y2):
        return Fraction(self.x,self.y) - Fraction(x2,y2)
    def Float(self):
        return self.x/self.y
    def reverse(self):
        return Fraction(self.y, self.x)
print(fraction(3,4).reverse())