import sqlite3
c= sqlite3.connect("mindX_school.db")
c.cursor()
c.execute("DROP TABLE IF EXISTS students")
c.execute("Create table students_info(id PK int, first_name varchar(50),last_name varchar(50),age int)")
students = [
    {
        "first_name":"duong",
        "last_name":"tran minh",
        "age":16
    }
    ,
    {
        "first_name":"hong ha",
        "last_name":"nguyen",
        "age":20
    }
    ,
    {
        "first_name":"cuong",
        "last_name":"nguyen van",
        "age":20
    }
    ,
    {
        "first_name":"hung",
        "last_name":"nguyen dang",
        "age":15
    }
    ,
    {
        "first_name":"huong",
        "last_name":"thao dan",
        "age":22
    }
    ,
    {
        "first_name":"hien",
        "last_name":"nguyen thi",
        "age":15
    }
    ,
    {
        "first_name":"quan",
        "last_name":"hoang",
        "age":10
    }
    ,{
        "first_name":"ngoc",
        "last_name":"vu",
        "age":8
    }
    ,
    {
        "first_name":"viet anh",
        "last_name":"dinh",
        "age":18
    }
]
address = ['thuong tin', 'hoang mai','nam tu liem','long bien','dong da','tay ho','cau giay','cau giay','da binh']
id = 1
for i in students:
    first_name = i['first_name']
    last_name = i['last_name']
    age = i['age']
    query = f"INSERT INTO students_info(id, first_name, last_name, age) VALUES('{id}','{first_name}','{last_name}','{age}')"
    c.execute(query)
    id+=1
# for i in range(0,len(address)):
#     add = address[i]
#     query2 = f'Update students_info  WHERE id="{i+1}"'
#     c.execute(query2)
c.commit()
c.close()