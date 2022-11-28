ob = {
    "HP" : 20,
    "DELL" : 50,
    "MACBOOK" : 12,
    "ASUS" : 30
}
ob["TOSHIBA"] = 10
print("Available products :")
for i in ob:
    print(f"- {i} : {ob[i]}")