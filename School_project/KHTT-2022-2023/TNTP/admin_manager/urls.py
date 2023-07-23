from django.urls import path
from . import views
urlpatterns = [
    path('admin_login/',views.load_admin_login,name='admin_login'),
    path('dashboard/',views.load_dashboard,name='dashboard'),
    path('feedback/',views.load_feedback,name='feedback'),
    path('post_manage/',views.load_post_manage,name='post_manage'),
    path('user_profile/',views.load_user_profile,name='user_profile'),
    path('session_manage/',views.load_session_manage,name='session_manage'),
    path('user_manage/',views.load_user_manage,name='user_manage')
]