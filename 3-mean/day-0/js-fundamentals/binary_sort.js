function binarySort(arr, target) {
	var left = 0;
	var right = arr.length - 1;
	while (left <= right) {
		var middle = Math.floor((left + right)/2);
		if (arr[middle] == target) {
			console.log("Equals")
			return middle;
		} else if (arr[middle] < target) {
			console.log(`Check 1: got ${middle} index. Need to go lower`)
			left = middle + 1;
		} else {
			console.log(`Check 2: got ${middle} index. Need to go higher`)
			right = middle - 1;
		}
	}
	return -1;
}

input = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94]
console.log(binarySort(input, 91));