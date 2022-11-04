year = int(input("Enter your year :"))
def year_check(x):
    if (x%4 == 0 and x% 100 != 0) or (x%100 == 0 and x%400 == 0):
        print("Đây là năm nhuận")
    else :
        print("Đây không phải là năm nhuận")
year_check(year)