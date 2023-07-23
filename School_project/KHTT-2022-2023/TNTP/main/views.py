from django.shortcuts import render

# Create your views here.
def load_home(re):
    return render(re, 'index.html')
def load_post(re):
    return render(re,'post.html')
def load_profile(re):
    return render(re,'profile.html')
def load_session(re):
    return render(re,'session.html')
def load_search(re):
    return render(re,'search.html')
def load_game(re):
    return render(re,'game.html')