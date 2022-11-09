from datetime import datetime
now = datetime.now()
print('Today is :',now.strftime('%Y/%m/%d'))
print('Time right now :',now.strftime('%H:%M:%S %Y-%m-%d'))