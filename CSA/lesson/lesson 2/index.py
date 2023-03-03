# class Point:
#     def __init__(self, x,y):
#         self.x = x
#         self.y = y
#     def add(self,point):
#         return self.x + point, self.y + point
#     def sub(self,point):
#         return self.x - point, self.y - point
# print(Point(5,2).add(2))
# print(Point(5,2).sub(2))
# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname

#   def printname(self):
#     print(self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname, year):
#     Person.__init__(self,fname, lname)
#     self.graduationyear = year
# x = Student("Mike", "Olsen", 2019)
# x.printname()
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def info(self):
        print(self.name+",",self.age)
    def call(self):
        print(self.name)
# tạo ra 1 class student kế thừa từ person
class Student(Person):
    pass
    # def __init__(self,name,age):
    #     Person.__init__(name,age)

a=Student("Van Anh",1)
a.info()