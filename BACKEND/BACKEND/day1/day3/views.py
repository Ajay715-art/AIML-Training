from django.shortcuts import render
def nani(request):
    return render(request, 'index.html')
def sai(request):
    return render(request, 'home.html')
def buss(request):
    return render(request, 'about.html')
def swee(request):
    return render(request, 'santhu.html')
def shipp(request):
    from django.http import HttpResponse
    return HttpResponse('this is my app page')



# Create your views here.
