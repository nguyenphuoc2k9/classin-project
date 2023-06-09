class employees():
    def __init__(self):
        self.employees = {}
    def inputInfo(self,name,age,add,salary,worktime):
        new_employee = {
            'name':name,
            'age':age,
            'address':add,
            'salary':salary,
            'worktime':worktime 
        }
        self.employees[name] = new_employee
    def printInfo(self):
        for i in self.employees:
            current_data = self.employees[i]
            
            print('ten nhan vien: ',current_data['name'])
            print('tuoi :',current_data['age'])
            print('address :',current_data['address'])
            print('salary :',current_data['salary'])
            print('gio lam :',current_data['worktime'])
            print('')
            
    def tinhthuong(self,name):
        data = self.employees[name]
        thuong = 0
        if data['worktime'] >= 200:
            thuong = (data['salary'] * 20)/100
        elif data['worktime'] < 200 and data['worktime'] >= 100:
            thuong = (data['salary']*10)/100
        print('tien thuong cua nhan vien la :', thuong)
em = employees()
em.inputInfo('phuoc',12,'129 tan hiep',2000,200)
em.inputInfo('phuocculi',12,'129 tan hiep',3000,100)
# em.printInfo()
em.tinhthuong('phuoc')