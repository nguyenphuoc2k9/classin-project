names = {
'students': [
{'firstName': 'Nikki', 'lastName': 'Roysden'},
{'firstName': 'Mervin', 'lastName': 'Friedland'},
{'firstName': 'Aron', 'lastName': 'Wilkins'}
],
'teachers': [
{'firstName': 'Amberly', 'lastName': 'Calico'},
{'firstName': 'Regine', 'lastName': 'Agtarap'}
]
}
print("List of students :")
students = names.get("students")
for i in range(0, len(students)) :
    firstname = students[i].get("firstName")
    lastname = students[i].get("lastName")
    print(f" - {firstname} {lastname}")
print("List of teachers :")
teachers = names.get("teachers")
for x in range(0, len(teachers)):
    firstname = teachers[x].get("firstName")
    lastname = teachers[x].get("lastName")
    print(f"- {firstname} {lastname}")