from django.shortcuts import render

def day2_view(request):
    return render(request, 'day2.html')
# Create your views here.
def app_view(request):
    return render(request, 'posts/post_list.html')
