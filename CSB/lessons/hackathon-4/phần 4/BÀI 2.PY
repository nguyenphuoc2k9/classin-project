ob = {
    "HP" : 600,
    "DELL" : 650,
    "MACBOOK" : 1200,
    "ASUS" : 400
}
brand  = input("Input a brand :")
num = int(input("Input amount to buy :"))
print(f"total price {brand} :",ob[brand]*num)