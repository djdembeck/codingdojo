from django.shortcuts import render, redirect
from login.models import User
from .models import Author, Book, Review
from django.contrib import messages

def index(request):
	redirect('/reads')