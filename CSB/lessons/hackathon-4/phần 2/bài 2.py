ob = {
    "HP" : 20,
    "DELL" : 50,
    "MACBOOK" : 12,
    "ASUS" : 30
}
string = input("Input a brand :")
num = int(input("Input amount :"))
ob[string] =  num
print("Available products :")
for i in ob:
    print(f"- {i} : {ob[i]}")