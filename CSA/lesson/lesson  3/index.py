class student_manager:
    _student_data_ = []
    def add_student(self,name,gender,age,math_mark,phy_mark,chem_mark):
        if self._student_data_ == []:
            ave = (chem_mark+phy_mark+math_mark)/3
            ability = None
            if ave >= 8:
                ability = "gioi"
            elif ave < 8 and ave >=6.5:
                ability = "khá"
            elif ave  < 6.5 and ave >=5:
                ability = "trung bình"
            else:
                ability = "khá"
            self._student_data_.extend([
               {
                   'id':1,
                   'name':name,
                   'gender':gender,
                   'age':age,
                   'math':math_mark,
                   'phy':phy_mark,
                   'chem':chem_mark,
                   'ave' : ave,
                   'ability': ability
               }
           ])
        else:
            ave_score = (chem_mark+phy_mark+math_mark)/3
            ability = None
            if ave_score >= 8:
                ability = "gioi"
            elif ave_score < 8 and ave >=6.5:
                ability = "khá"
            elif ave_score  < 6.5 and ave >=5:
                ability = "trung bình"
            else:
                ability = "khá"
            self._student_data_.extend([
               {
                   'id': self._student_data_[len(self._student_data_)-1],
                   'name':name,
                   'gender':gender,
                   'age':age,
                   'math':math_mark,
                   'phy':phy_mark,
                   'chem':chem_mark,
                   'ave' : ave_score,
                   'ability': ability
               }
           ])
    def show_selected(self,id):
        return str(self._student_data_[id])
    def show_all(self):
        for i in range(len(self._student_data_)):
            return self._student_data_[i]
    def del_student(self,id):
        return "Student with id",self._student_data_.pop(id), "Deleted"
manage = student_manager()
manage.add_student("phuoc","nam",12,10,10,10)
# print(manage.show_all())
manage.add_student("phuoc","nam",13,10,10,10)
# print(manage.show_selected(0))
print(manage.del_student(0))