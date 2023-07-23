from django.urls import path
from . import views
urlpatterns = [
    path('home/',views.load_home,name='home'),
    path('post/',views.load_post, name='post'),
    path('profile/',views.load_profile, name='profile'),
    path('search/',views.load_search,name='search'),
    path('session/',views.load_session,name = 'session'),
    path('game/',views.load_game,name='game')
]