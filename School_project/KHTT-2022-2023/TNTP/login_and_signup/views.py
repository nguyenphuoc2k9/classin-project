from django.shortcuts import render

# Create your views here.
def load_login_page(re):
    return render(re,'login.html')
def load_more_info(re):
    return render(re,'more-info.html')