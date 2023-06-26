s ='MCMXCIV'
dic = {
            'I':1,
            'V':5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
}
special_case = {
   'IV':4,
   'IX':10,
   'XL':40,
   'XC':90,
   'CD':400,
   'CM':900 
}
total_num = 0
two_letter = ''
for i in s:
    two_letter = i
    for spec_name,spec_val in special_case.items():
        if spec_name == two_letter:
            total_num += spec_val
    for name,val in dic.items():
        if i == name:  
            total_num+=val
        
print(total_num)
