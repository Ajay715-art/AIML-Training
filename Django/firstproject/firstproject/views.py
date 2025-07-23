from django.http import HttpResponse
from django.shortcuts import render
def home(request):
    #return HttpResponse("<h1>Home Page</h1>")
    return render(request, 'home.html')
def about(request):
    #return HttpResponse("<h1>About Page</h1>")
    return render(request, 'about.html')