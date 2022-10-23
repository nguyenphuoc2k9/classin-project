
color = ['blue','teal','green']
print("color list:")
for i in color:
    print(i, end=' ')
print("")
# index = int(input("Input position :"))
# print(color[index-1])
item = input("Item to delete :")
if item.isnumeric() == False:
    color.remove(item)
elif item.isnumeric() == True:
    item = int(item)
    color.remove(color[item-1])
print("New color list :")
for x in color :
    print(x, end=" ")