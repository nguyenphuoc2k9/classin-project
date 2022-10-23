score = [78,56,67]
new = score.extend([int(input("New score :"))])
score.sort(reverse= True)
print("high scores :")
for i in range(len(score)) :
    print(f"{i+1}.", score[i])

