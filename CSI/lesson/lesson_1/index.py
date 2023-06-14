#1
# input_1 = float(input('number:'))
# print('Double:',input_1*2)
#2
# r = float(input('ban kinh:'))
# print(f'Dien tich:{(r**2)*3.14}')
# print(f'Chu vi:{r*2*3.14}')
#3
class b3:
    def __init__(self,n):
        self.n = n
        self.arr = []
    def arr_input(self):
        for i in range(self.n):
            self.arr.extend([int(input('num_',i,':'))])
    def print_total(self):
        total = 0
        for i in self.arr:
            total += i
        print('Tong so la:',total)
# num_1 = int(input('N:'))
# arr = []
# total = 0
# for i in range(num_1):
#     arr.extend([int(input(f'num_{i}:'))])
# for i in arr:
#     total+=i
# print(f'tong so la:{total}')
#4
class b4:
    def __init__(self,a,b):
        self.len_1 = a
        self.len_2 = b
    def chu_vi(self):
        print(f'chu vi:{(self.len_1+self.len_2)*2}')
    def dien_tich(self):
        print(f'dien tich:{self.len_1*self.len_2}')
# bai_4 = b4()
# len_1 = float(input('len_1:'))
# len_2 = float(input('len_2:'))
# print(f'chu vi:{(len_1+len_2)*2}')
# print(f'dien tich:{len_1*len_2}')
# class b5:
#     def __init__(self,n):
#         self.n = n
#     def uoc(self):
#         arr = []
#         for i in range(1,self.n):
#             if( self.n %i ==0):
#                 arr.extend([i])
#         print(arr)
# b5(4).uoc()
#6
# arr = ['asasd','bdd','css','add']
# for i in arr:
#     arr.sort()
# print(arr)
# class book:
#     def __init__(self,id,title,desc):
#         self.desc = desc
#         self.title = title
#         self.id = id
# class libary:
#     def __init__(self):
#         self.storage = []
#     def add_book(self,book):
#         self.storage.append(book)
#     def display_book(self):
#         for i in self.storage:
#             print(f'title:{i.title}')
#             print(f'desc:{i.desc}')
#             print(f'id:{i.id}')
#     def find_book(self,book_name):
#         for i in self.storage:
#             if(i.title ==book_name):
#                 return i.title,i.desc,i.id
#     def remove_book(self,id):
#         for i in self.storage:
#             if i.id == id:
#                 self.storage.remove(i)
#         print(self.storage)
# lib = libary()
# bo = book(2,'book#1','hello')

# lib.add_book(bo)
# lib.display_book()
# print(lib.find_book('book#1'))


#solve equation

x = 0
a = int(input('a:'))
b = int(input('b:'))
c = int(input('c:'))
basic_form = f'{a}*x-{b}*x+{c} = 0'
x = c/a-b
print(f'retsult of {basic_form} is x = {x}')
