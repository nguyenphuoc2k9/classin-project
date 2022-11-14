num = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"]
letter_1 = "I"
letter_2 = "V"
letter_3 = "X"
x = input("Enter a Roman number :")
if x.upper() not in num:
    print("Arabic number : Not found")
else :
    
    index = num.index(x.upper())
    total = 0
    nums = num[index]

    for i in nums:
        if i == letter_1:
            total += 1
        elif i == letter_2:
            total+=5
        elif i == letter_3: 
            total+=10
    print(total)
    
    