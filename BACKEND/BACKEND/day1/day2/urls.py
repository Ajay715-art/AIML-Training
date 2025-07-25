from django.urls import path
from . import views

urlpatterns = [
    path('', views.day2_view, name='day2_home'),
    path('app/', views.app_view, name='app_page'),
]
