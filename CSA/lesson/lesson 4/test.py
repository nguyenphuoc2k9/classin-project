import random
from random import Random
class card:
    __suits =  ['Clubs','Diamonds','Hearts','Spades']
    __ranks = ['Joker','Ace','2','3','4','5','6','7','8','9','10','11','12','13','Jack','Queen','King']
    def __init__(self,suit = 0, rank = 0):
        self.suit = suit
        self.rank = rank
    def __str__(self):
        return "{0} of {1}".format(self.__ranks[self.rank],self.__suits[self.suit])
    def compare(self, other):
        if self.suit > other.suit:
            return True
        elif self.suit < other.suit:
            return False
        else:
            if self.rank > other.rank:
                return True
            elif self.rank < other.rank:
                return False
            else:
                return 0
class desk():
    def __init__(self):
        self.cards = []
        for i in range(0,4):
            for y in range(1,14):
                self.cards.append(card(i, y))
    def __str__(self):
        s = ""
        for i in range(len(self.cards)):
             s = f"{i+1}) {self.cards[i]} \n"
        return s
    def Shuffle(self):
        random.shuffle(self.cards)
    def broadcast(self):
        return Random.sample(self.cards,k=13)
    def print_card(self):
        for i in range(0,len(self.cards)):
            print(f"{i+1}) {self.cards[i]} \n")
class Hand(desk):
    def __init__(self,name = ""):
        super().__init__(self)
        self.cards = []
        self.name = name
    def add(self,card):
        self.cards.append(card)
    def outcard(self,card):
        return f" has outcarded {card}"
    def removecard(self,card):
        self.cards.pop(self.cards.index(card))
p1 = Hand("A")
d = desk()
c = card()
p2 = Hand("B")
p3 = Hand("C")
p4 = Hand("D")
hands = [p1, p2, p3, p4]


