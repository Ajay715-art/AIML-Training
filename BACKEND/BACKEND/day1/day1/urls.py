"""
URL configuration for day1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path , include
from . import VIEW
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', VIEW.first_day_view),
    path('home/', VIEW.home_view),
    path('about/', VIEW.about_view),
    path('santhu/', VIEW.santhu_view),
    path('day2/', include('day2.urls')),
    path('app/', VIEW.app_view),
]