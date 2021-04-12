from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse
def root(request):
	return redirect("/blogs")
def index(request):
	return HttpResponse("placeholder to later display a list of all blogs")
def new(request):
	return HttpResponse("placeholder to display a new form to create a new blog")
def create(request):
	return redirect("/")
def show(request, number):
		return HttpResponse(f"placeholder to display blog number: {number}")
def edit(request, number):
		return HttpResponse(f"placeholder to edit blog: {number}")
def destroy(request, number):
	return redirect("/")
def json(request):
    return JsonResponse(
		{"title": "My first blog", 
	"content": "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."}
	)