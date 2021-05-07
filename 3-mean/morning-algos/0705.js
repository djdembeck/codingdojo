function partitionArr(arr, left, right){
	// Choosing to select pivot from end of array
	let pivot = arr[right]
	let i = (left - 1)

	for (let j = left; j <= right - 1; j++) {
		// Swap elements smaller than pivot
		if (arr[j] < pivot) {
			// Move left index forward
			i++;
			[arr[i],arr[j]] = [arr[j], arr[i]]
		}
	}

	[arr[i + 1],arr[right]] = [arr[right], arr[i + 1]]
	return i + 1;
}

function quickSort(arr, left, right) {
	if (left < right) {
		var partition = partitionArr(arr, left, right)
		// before pivot point
		quickSort(arr, left, partition - 1)
		// after pivot point
		quickSort(arr, partition + 1, right)
	}
	return arr;
}
let arr = [5,2,7,3,4,6,1];
console.log(quickSort(arr, 0, 6))