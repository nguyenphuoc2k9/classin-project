students = [{
    "firstname":"Nikki","lastname":"Roysden"
},{
    "firstname" : "Mervin","lastname" : "Friedland"
},{
    "firstname" : "Aron","lastname":"Wilkins"
}]
print("Lists of students :")
for i in students:
    student_name = "-"
    for x in i:
        student_name += i[x]
        student_name += " "
    print(student_name)