prices = [
    {
        "HP" :20,
        "DELL" : 50,
        "ASUS" : 30,
        "MACBOOK" : 12    
    },
    {
        "HP" : 600,
        "DELL" : 650,
        "MACBOOK" : 1200,
        "ASUS" : 400
    }
]
totalvalue = 0
totaldict = {
    
}
print("Total value of Available brands :", )
for i in range(0, len(prices)):
    total = 1
    for x in prices[i]:
        total = prices[i][x] * prices[i+1][x]
        totaldict[x] = total
    if i == 0:
        break
for y in totaldict:
    print(f"- {y} : {totaldict[y]}")
    totalvalue += totaldict[y]
print("Total value of available items :", totalvalue)
