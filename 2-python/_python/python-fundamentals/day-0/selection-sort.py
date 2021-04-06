def selection_sort(arr):
	marker = 0
	lowest = 0
	# First, select item in array to work on
	for i in range(len(arr)):
		# Next, loop through all other variables
		for j in range(marker, len(arr)):
			if arr[j] <= lowest:
				arr[j], arr[i] = arr[i], arr[j]
				marker += 1
		lowest += 1
	return arr

print(selection_sort([9,2,7,4,6,0,1,5,3,8]))