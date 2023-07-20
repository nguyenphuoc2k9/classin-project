from django.shortcuts import render

# Create your views here.
def load_page(re):
    return render(re,'post.html')