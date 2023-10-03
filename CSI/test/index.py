
import os
from twilio.rest import Client


account_sid = "AC799128c6f52b24af3ee2ee842ee0bc0e"
auth_token = "991ac1209c38f026da787944b75af421"
client = Client(account_sid, auth_token)

call = client.calls.create(
  url="http://demo.twilio.com/docs/voice.xml",
  to="+84905332540",
  from_="+12512415578"
)

print(call.sid)