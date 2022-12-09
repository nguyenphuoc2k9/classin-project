file = open("lessons\lesson 12\lol.txt","a+")

file.seek(0,2)
print(file.read())