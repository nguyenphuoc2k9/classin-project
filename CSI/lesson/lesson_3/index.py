# finbon = [1,1]
# n = int(input('n='))
# last_num = 0
# for i in range(0,n):
#     finbon.extend([finbon[i] + finbon[i+1]])
# for i in range(2):
#     finbon.pop()
# print(finbon)
list_1 = []
list_2 = ['a','b','c']
list_3 = [x for x in range(10)]
list_4 = list(range(10))
list_5 = list('abcdef')
#ex
# print(list_2)
# print(list_3[5])
# print(list_4[:5])
# print(list_5[5::10])
##2 : insert method
#append
list_4.append(2)
#insert(index,value)
list_4.insert(2,5)
#extend
list_4.extend(5)
# operator method +=
list_4 += 2
#note add value type could be data types (number,string,object,array)

##delete
#del
del list_4[1]
#pop
list_4.pop()
#remove
list_4.remove(5)
##copy
copy = list_4.copy()
##sort
#sort
#sort(reverse(True))
####tuple
##create
tup_1 = ()
tup_2 = (1)
tup_3 = (2,3,4)
tup_4 = (range(10))
##call(similar to array calling)
print(tup_3[1])
##change(cannot be changed)
###str
##join
x = ''.join(['xd','lol','hihi'])
##other method
#find
x.find('xd')
#replace
x.replace('xd',' ')
#title,lowercase,uppercase
x.title()
x.lower()
x.upper()
###set
##create
set_1 = {1,2,3}
set_2 = {2,True,'asdsad'}
##delete
set_1.remove(2)
##discard
set_2.discard(True)
##subset and supperset
set_3 = set('abcdef')
set_4 = set('abc')
set_5 = set('xyz')

print(set_4.issubset(set_3))
print(set_4.issubset(set_5))
print(set_3.issuperset(set_4))
print(set_3.issuperset(set_5))
###dict
##update(dict())
##delete delete with keys include(pop, del)