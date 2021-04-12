from django.shortcuts import render, redirect
from datetime import datetime
import pytz

# Create your views here.

def root(request):
	return redirect('/time_display')

def time_display(request):
	tz_CST = pytz.timezone('America/Chicago') 
	context = {
        "time": datetime.now(tz_CST).strftime("%Y-%m-%d %H:%M %p")
    }
	return render(request, "index.html", context)