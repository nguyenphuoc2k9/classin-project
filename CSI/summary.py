import tkinter as tk
import nltk
from textblob import TextBlob
from newspaper import Article

url = 'https://vtc.vn/bien-so-51k-888-88-duoc-dau-gia-ky-luc-32-34-ty-dong-ar820268.html'

nltk.download('punkt')
article = Article(url)

article.download()
article.parse()

article.nlp()


print(f'title : {article.title}')
print(f'title : {article.authors}')
print(f'title : {article.publish_date}')
print(f'title : {article.summary}')