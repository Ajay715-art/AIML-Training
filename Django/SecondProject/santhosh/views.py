from django.shortcuts import render
from . models import Post

# Create your views here.
def santhosh(request):
    posts=Post.objects.all()
    return render(request,'santhosh/u7.html',{'posts':posts})
def contact(request):
    return render(request,'santhosh/contact.html')
