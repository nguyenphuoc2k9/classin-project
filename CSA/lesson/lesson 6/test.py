import sqlite3

# Connect to the database
conn = sqlite3.connect('HR.sqlite')
c = conn.cursor()
#re = c.execute("SELECT * FROM employees ORDER BY FIRST_NAME DESC")
#3
#query = c.execute("SELECT FIRST_NAME, LAST_NAME,SALARY from employees")
#for i in query:
#    print(i)
#    print(f'PF:{float(i[2])*12/100}')
#4
#re = c.execute("SELECT SUM(SALARY) AS SA,FIRST_NAME FROM employees GROUP BY FIRST_NAME")
#5
#6
#re = c.execute("SELECT SALARY, FIRST_NAME FROM employees GROUP BY FIRST_NAME ORDER BY SALARY DESC")
#7

conn.close()
con = sqlite3.connect("HR.sqlite")
c = con.cursor()
re = c.execute("SELECT SALARY, FIRST_NAME FROM employees GROUP BY FIRST_NAME ORDER BY SALARY DESC")
for i in re:
    print(i)