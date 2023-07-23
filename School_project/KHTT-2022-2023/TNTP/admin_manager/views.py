from django.shortcuts import render

def load_admin_login(re):
    return render(re,'admin_login.html')
def load_dashboard(re):
    return render(re,'dashboard.html')
def load_feedback(re):
    return render(re,'feedback.html')
def load_post_manage(re):
    return render(re,'post-manage.html')
def load_user_profile(re):
    return render(re,'profile_user.html')
def load_user_manage(re):
    return render(re,'user-manage.html')
def load_session_manage(re):
    return render(re,'session-manage.html')