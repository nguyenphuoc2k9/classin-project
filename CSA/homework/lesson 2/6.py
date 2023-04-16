from datetime import datetime
class user:
    def __init__(self,username,password):
        self.username = username
        self.password = password
    def welcome(self):
        print("Welcome ", self.username)
    def check_password(self,password):
        if self.password == password:
            return True
        else:
            return False
class SubscribedUser(user):
    def __init__(self,username,password,expire_date):
        user.__init__(self,username,password)
        self.expire_date = expire_date
    def is_expired(self):
        if datetime.now().strftime("%Y-%m-%d") == self.expire_date:
            return True
        else:
            return False
User = user('mindx', '12345')
User.welcome()
print(User.check_password('1234'))
s_user = SubscribedUser('s_mindx', '1234', datetime(2021, 1, 1))
s_user.welcome()
print(s_user.check_password('1234'))
print(s_user.is_expired())