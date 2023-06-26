import time as t
def cal_sum(arr):
    total = 0
    for i in arr:
        total+=i
    return total
def cal_time(func):
    start_time = t.time()
    calc = func
    final_time = t.time() - start_time
    return final_time,calc
value = {'1 million': 1000000,'10 million': 10000000,'100 million':100000000}
num = value['1 million']
number_list = [i for i in range(num+1)]
tim1,cacl1 = cal_time(cal_sum(number_list))
print(f'thời gian thực thi : {tim1},result:{cacl1}')
    
def cal_sum_v3(num):
    number_list = [i for i in range(num+1)]
    total = 0
    for i in number_list:
        total+=i
    return total

# def find_2nd_max(arr):
#     ex_1 = list(arr)
#     current_max = 0
#     for i in arr:
#         if(current_max < i):
#             current_max = i
#     ex_1.remove(current_max)
    
#     second = 0
#     for i in ex_1:
#         if second < i:
#             second = i
    
#     return second
# print(find_2nd_max([2,290,34,23,56]))