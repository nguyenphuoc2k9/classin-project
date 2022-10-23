town_name = ["BĐ", "BTL", "CG","ĐĐ", "HBT"]
town_amout_people = [245100, 333300, 266800, 420900, 31800]
print("Indices of:")
max = town_amout_people.index(max(town_amout_people))
min = town_amout_people.index(min(town_amout_people))
print(f"- Most populated dist : {max-1}")
print(f"- Least populated dist : {min-1}")
print("Names of :")
max_name =  town_name[max]
min_name = town_name[min]
print(f"- Most populated dist : {max_name}")
print(f"- Least populated dist : {min_name}")