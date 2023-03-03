x = input("Enter a file name :")
try:
    file = open(f"homework\lesson 12\(bài 2\{x}")
    print(file.read())
except :
    print("file not found")