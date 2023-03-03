
file = open("homework\lesson 12\(bai 4\_txt.txt", "a")
print("== Input file content below ==")
from datetime import datetime
now = datetime.now()
str_time = now.strftime("%Y  %M  %D")
str = input()
file.write(f"== input current time {str_time}==\n {str}\n")