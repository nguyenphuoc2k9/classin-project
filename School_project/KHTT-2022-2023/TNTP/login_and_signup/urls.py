from django.urls import path
from . import views


urlpatterns =[
    path('login/',views.load_login_page),
    path('more_info/',views.load_more_info),
]