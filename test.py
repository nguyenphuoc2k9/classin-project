from gtts import gTTS

tts = gTTS('User is having a depression, require immediate help',lang="en")
tts.save('sound.mp3')