from django.shortcuts import render, HttpResponse, redirect
import random

def index(request):
	if not 'rand_result' in request.session:
		request.session['rand_result'] = random.randrange(1, 100)
		print(request.session['rand_result'])
	return render(request, "index.html")

def find_gold(request):
	val_dict = [
		{"area": "farm", "min_value": 10, "max_value": 20},
		{"area": "cave", "min_value": 5, "max_value": 10},
		{"area": "house", "min_value": 2, "max_value": 5},
		{"area": "casino", "min_value": -50, "max_value": 50}
	]
	if not 'activity_text' in request.session:
		request.session['activity_text'] = "Hello world!"
	if not 'total_gold' in request.session:
		request.session['total_gold'] = 0

	key = request.POST['find_gold']
	print(key)
	for i in range(len(val_dict)):
		# print(val_dict[i]['area'])
		# print(val_dict[i][key])
		if key == val_dict[i]['area']:
			area = val_dict[i]['area']
			min_value = val_dict[i]['min_value']
			max_value = val_dict[i]['max_value']
			rand_result = random.randrange(min_value, max_value)
	request.session['total_gold'] += rand_result
	request.session['activity_text'] += f"\n Earned {rand_result} golds from the {area}!"
	return redirect ("/")