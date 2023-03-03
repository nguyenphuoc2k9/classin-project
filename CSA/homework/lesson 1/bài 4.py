from datetime import datetime
class DateHandler:
    def format_date(date):
        return date.strftime("%d/%M/%Y")
    def get_day_between(date1,date2):
        return (date2-date1).days
start_date = datetime(2021, 1, 1)
end_date = datetime(2022, 1, 1)

print("Start:", DateHandler.format_date(start_date))
print("End:", DateHandler.format_date(end_date))
print("Days between:",
       DateHandler.get_day_between(start_date, end_date))