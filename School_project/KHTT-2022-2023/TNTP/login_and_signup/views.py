from django.shortcuts import render

def load_page_login(re):
    return render(re, 'login.html')
def load_page_more(re):
    return render(re,'more-info.html')