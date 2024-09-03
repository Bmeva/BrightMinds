from django.http import HttpResponse


def Home(request):
    return HttpResponse('welcome to the Elearning management site')