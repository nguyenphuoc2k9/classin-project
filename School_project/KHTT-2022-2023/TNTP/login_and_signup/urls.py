from django.urls import path
from . import views 

urlpatterns = [
    path('', views.load_page_login,name='login'),
    path('more-info/',views.load_page_more,name='more-info')
]