color = ['blue','teal','green']
print("color list:")
for i in color:
    print(i, end=' ')
print("")
color.append(input("Add new color :"))
print("New color list :")
for x in color:
    print(x, end= ' ')