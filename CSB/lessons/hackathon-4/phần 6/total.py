cha = {
    "Name" : "Light",
    "Age" : 17,
    "Strength": 8,
    "Defense" : 10,
    "HP" : 100,
    "Backpack" : ["Shield","Bread Loaf"],
    "Gold" : 100,
    "Level" : 2
}
cha["Gold"] = cha['Gold'] + 50
pack = cha["Backpack"]
pack.extend(["FlintStone"])
cha['Backpack'] = pack
for i in cha:
    print(f"- {i} : {cha[i]}")