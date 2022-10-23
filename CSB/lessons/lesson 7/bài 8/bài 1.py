score = [78,56,67,20,10,79]
new = score.extend([int(input("New score :"))])
score.sort(reverse= True)
print("high scores :")
for i in range(5) :
    print(f"{i+1}.", score[i])
