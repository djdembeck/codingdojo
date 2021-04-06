# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def biggie_size(arr):
	for i in range(len(arr)):
		if arr[i] > 0:
			arr[i] = "big"
	return arr

print(biggie_size([-1, 3, 5, -5]))

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it

def count_positives(arr):
	positive_num = 0
	for i in range(len(arr)):
		if arr[i] > 0:
			positive_num += 1
	arr[len(arr) - 1] = positive_num

	return arr

print(count_positives([1,6,-4,-2,-7,-2]))

# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7

def sum_total(arr):
	current_sum = 0
	for i in range(len(arr)):
		current_sum += arr[i]

	return current_sum

print(sum_total([1,2,3,4]))

# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5

def average(arr):
	current_sum = 0
	for i in range(len(arr)):
		current_sum += arr[i]
	current_average = current_sum / len(arr)

	return current_average

print(average([1,2,3,4]))

# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0

def length(arr):
	return len(arr)

print(length([1,2,3,4]))

# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37,2,1,-9]) should return -9
# Example: minimum([]) should return False

def minimum(arr):
	lowest_num = 0
	if len(arr) == 0:
		return False
	else:
		for i in range(len(arr)):
			if arr[i] < lowest_num:
				lowest_num = arr[i]
		return lowest_num

print(minimum([37,2,1,-9]))

# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False

def maximum(arr):
	highest_num = 0
	if len(arr) == 0:
		return False
	else:
		for i in range(len(arr)):
			if arr[i] > highest_num:
				highest_num = arr[i]
		return highest_num

print(maximum([37,2,1,-9]))

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }

def ultimate_analysis(arr):
	analysis_dict = {'sumTotal': sum_total(arr), 'average': average(arr), 'minimum': minimum(arr), 'maximum': maximum(arr), 'length': length(arr)}
	return analysis_dict

print(ultimate_analysis([37,2,1,-9]))

# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]

def reverse_list(arr):
	replace = len(arr) - 1
	for i in range(0, len(arr) - 2, 1):
		arr[i], arr[replace] = arr[replace], arr[i]
		replace -= 1

	return arr

print(reverse_list([37,2,1,-9]))