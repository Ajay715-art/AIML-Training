# Add app_view to display 'this is my app page'
def app_view(request):
    from django.http import HttpResponse
    return HttpResponse('this is my app page')
from django.http import HttpResponse
from django.shortcuts import render

def first_day_view(request):
    return render(request, 'index.html')

def home_view(request):
    return render(request, 'home.html')

def about_view(request):
    return render(request, 'about.html')

def santhu_view(request):
    return render(request, 'santhu.html')
