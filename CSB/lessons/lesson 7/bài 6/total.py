town_name = ["BĐ", "BTL", "CG","ĐĐ", "HBT"]
town_amout_people = [245100, 333300, 266800, 420900, 31800]
town_capicity = [9.224, 43.35, 12.04, 9.96,10.09]
total = 0
print("population density of :")
for i in range(len(town_name)):
    population_density = town_amout_people[i]/town_capicity[i]
    name = town_name[i]
    print(f"- {name}: {population_density}")
    total += population_density
avv = total/len(town_name)
print("Average population density :", avv)