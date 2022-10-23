str = input("Write a sentence :")
word_list = str.split(" ")
count = 0
u_word = []
# for ele in word_list:
#     if word_list != ele:
#         count +=1
# print(count)
for word in word_list:
    if  word not in u_word:
        u_word.extend([word])
print("Unique word count :", len(u_word))
        