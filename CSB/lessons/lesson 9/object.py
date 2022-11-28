
#print(len(car))
#print(car[0].items())
#for i in car[0]:
#    print(car[0][i])
#pop to remove
#update to update ;-;
#aray['ex']= value to add
# info  = {
#     "HP": 20,
#     "DELL" : 50,
#     "MACBOOK" : 12,
#     "ASUS" : 30
# }
# print(info.get("MACBOOK"))
# x = input("Enter a type of computer :")
# print(info.get(x))
cha = {
    "Age" : 17,
    "Stregth" : 8,
    "Defense" : 10,
    "HP" : 100,
    "Backpack" : ["Shield", "Bread Loaf"],
    "Gold" : 100,
    "Level" : 2
}
cha["Gold"] = cha["Gold"] + 50
chB = cha["Backpack"] + ["FlintStone"]
cha['Backpack'] = chB
cha["Pocket"] = ["Flashlight", "MonsterDex"]
for i in cha:
    print(cha[i])