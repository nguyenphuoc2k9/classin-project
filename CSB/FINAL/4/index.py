print("Welcome to MindX restaurant")
dish = []
def print_food(food):
    print("Well done! Your order:")
    for i in food :
        print(f"- {i}")
def call_food():
    i = 1
    while i <= 1:
        a = input("Enter a dish please :")
        if a in dish:
            print("You chose this already.")
            y = input("Anything else? (y/n):")
            if y == "y":
                call_food()
                i+=1
            elif y == "n":
                print_food(dish)
                i+=1
                break
        else :
            dish.extend([a])
            y = input("Great choice! Anything else? (y/n):")
            if y == "y":
                call_food()
                i+=1
            elif y == "n" :
                print_food(dish)
                i+=1
                break
call_food()