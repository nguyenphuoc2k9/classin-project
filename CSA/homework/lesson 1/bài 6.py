
class SMS_store:
    _Message = []
    def __init__(self,pn):
        self.pn =pn
    def addNewarrival(self,From,message):
        self._Message.extend({
            "Pn":From,
            "content":message,
            "read":False
        })
    def messageCount(self):
        print(len(self._Message))
    def getmessage(self,index):
        self._Message[index].read = True
        return self._Message[index]
    def unreadmessage(self):
        total = 0
        for i in self._Message:
            if self._Message[i].read == False:
                total +=1
        print(total)