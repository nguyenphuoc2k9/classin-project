numbers = {
    "I": 1,"II":"2","III":3,"IV":4,"V":5,"VI":6,"VII":7,"VIII":8,"IX":9,"X":10
}
num = input("Enter a Roman number :")
nums = numbers.get(num)
if nums == None:
    print("Arabic number : Not found")
else : 
    print("Arabic number :",numbers.get(num))