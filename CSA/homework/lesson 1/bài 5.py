
class  Garage : 
    _cars = []
    _total_price = 0
    def __init__(self,owner_name):
        self.owner_name = owner_name
    def check_car(self,carname):
        if carname in self._cars:
            return True
        else : 
            return False
    def owner(self):
        print(self.owner_name)
    def addCar(self,carname, price):
        self._cars.extend({
            "CarName": carname,
            "Price" : price
        })
    def useCar(self,carName):
        for i in self._cars:
            if self._cars[i].CarName == carName:
                new_price = self._cars[i].Price - (self._cars[i].Price*10)/100
                self._cars[i].Price = new_price
    def Sellcar(self,carName):
        for i in self._cars :
            if self._cars[i].CarName == carName:
                self._cars.remove(self._cars[i])
    def price(self):
        for i in self._cars:
            self._total_price = self._cars[i].Price + self._total_price
    def myCar(self):
        for i in self._cars :
            print(self._cars[i].CarName)