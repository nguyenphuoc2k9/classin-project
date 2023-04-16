class mathlists:
    def __init__(self,values):
        self.values = values
    def __str__(self):
        return str(self.values)
    def __add__(self,value):
        for i in range(len(self.values)):
            self.values[i] += value
        return self
m_list = mathlists([1, 2, 3, 4, 5])
print(m_list)
m_list+=2
print(m_list)