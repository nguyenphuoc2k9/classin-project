
dishes = [("coca",5),("pepsi",4),("pizza", 10),("fried chicken",9)]
length = len(dishes)
print("Number of items :", length)
count = 1
avv_item = []
total = 0
for item in dishes:
    print(f"Item {count}: {item[0]}")
    print(f"Price of item {count}: {item[1]}")
    total += item[1]
avv = float(total/length)
for item in dishes :
    if item[1] > avv :
        avv_item.extend([item])
print("Average price :", avv)
print("Item(s) above average price : ", end = " ")
for i in avv_item :
    print(i, end = " ")