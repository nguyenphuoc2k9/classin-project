from datetime import datetime
class CustomeDate:
    def __init__(self):
        self.date = datetime.now()
    def get_date(self):
        return self.date.strftime("%d/%m/%Y")
    def get_time(self):
        return self.date.strftime("%H:%M:%S")
now = CustomeDate()
print(now.get_date())
print(now.get_time())