print('== Input file content below ==')
string = input()
file = open("homework\lesson 12\(bai 3\_txt.txt", "a")
file.writelines(f"{string}\n")