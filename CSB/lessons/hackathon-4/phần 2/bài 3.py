ob = {
    "HP" : 20,
    "DELL" : 50,
    "MACBOOK" : 12,
    "ASUS" : 30
}
ob["DELL"] = 60 
ob["MACBOOK"] = 2
print("Available products :")
for i in ob:
    print(f"- {i} : {ob[i]}")