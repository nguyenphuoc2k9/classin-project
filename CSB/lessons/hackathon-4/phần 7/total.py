skills = {
    "Skill 1":{
        "Name" : "Tackle",
        "Minimum Level" : 1,
        "Damage :": 5,
        "Hit rate" : 0.3
    },
    "Skill 2":{
       "Name" : "Quick Attack",
        "Minimum Level" : 2,
        "Damage :": 3,
        "Hit rate" : 0.5 
    },
    "Skill 3":{
        "Name" : "Strong Kick",
        "Minimum Level" : 4,
        "Damage :": 9,
        "Hit rate" : 0.2
    }
}
for i in skills:
    name = skills[i]["Name"]
    print(f"{i} : {name}")