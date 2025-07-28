from django.urls import path ,include
from . import views

urlpatterns = [
    path("",views.santhosh),
    path('contact/',views.contact)
]
