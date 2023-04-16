class WareHouse:
    _stor_ = dict()
    def additem(self,name,number):
        self._stor_[name] = number
    def getitem(self,name,number):
        if self._stor_[name] == number:
            return self._stor_.get(name)
        elif self._stor_[name] < number or self._stor_.get(name) is None:
            return "error"
    def getitemvalue(self,item_name):
        if self._stor_[item_name] is not None:
            return self._stor_.get(item_name)
        else:
            return "error"
    def isFull(self):
        if self._stor_ != None:
            return True
    def isempty(self):
        if self._stor_ == None:
            return True
class  localableWareHouse(WareHouse):
    _lock_ = True
    def __init__(self):
        if self._lock_ == False:
            WareHouse.__init__(self)