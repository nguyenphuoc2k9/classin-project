phone = {
   'Iphone12' :28000000,
    'Samsung N10': 16000000,
    'Oppo 93': 7500000,
    'Vsmart': 7400000,
    'Vivo' :4200000 
}
price = int(input("Input your budget :"))
for i in phone:
    if price >= phone[i] :
        print(f"{i} : {phone[i]}")
        
    