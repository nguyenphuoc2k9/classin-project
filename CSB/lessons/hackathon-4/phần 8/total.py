import random
skills = {
    "Skill 1":{
        "Name" : "Tackle",
        "Minimum Level" : 1,
        "Damage": 5,
        "Hit rate" : 0.3
    },
    "Skill 2":{
       "Name" : "Quick Attack",
        "Minimum Level" : 2,
        "Damage": 3,
        "Hit rate" : 0.5 
    },
    "Skill 3":{
        "Name" : "Strong Kick",
        "Minimum Level" : 4,
        "Damage": 9,
        "Hit rate" : 0.2
    }
}
cha_lv = 2
for i in skills:
    name = skills[i]["Name"]
    print(f"{i} : {name}")
skill_num  = int(input("Choose skill by number :"))
skill_chose = skills[f"Skill {skill_num}"]
skill_name = skill_chose["Name"]
print(F"You chose {skill_name}")
if cha_lv >= skill_chose["Minimum Level"]:
    hit_rate = random.uniform(0.0,1.0) 
    if hit_rate > skill_chose["Hit rate"]:
        print("Missed")
    else :
        print("Damage : ",skill_chose["Damage"])
else :
    print("Cannot deploy. Required Level", skill_chose["Minimum Level"])