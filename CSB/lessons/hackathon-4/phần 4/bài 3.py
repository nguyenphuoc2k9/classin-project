prices = {
    "HP" : 600,
    "DELL" : 650,
    "MACBOOK" : 1200,
    "ASUS" : 400
}
amounts = {
    "HP" : 20,
    "DELL" : 50,
    "MACBOOK" : 12,
    "ASUS" : 30
}
brand  = input("Input a brand :")
num = int(input("Input amount to buy :"))
print(f"total price {brand} :",amounts[brand]*num)

print("Available products :")
amounts[brand] = amounts[brand] - num
for i in amounts:
    print(f"- {i}: {amounts[i]}")    