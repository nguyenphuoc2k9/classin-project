from django.shortcuts import render

# Create your views here.
def home_create(request):
    return render(request,'index.html')