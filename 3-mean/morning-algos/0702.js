function insertionSort(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let current = arr[i+1];
		for (var j = i + 1; j > 0; j--) {
			if (arr[j-1] > current) {
				arr[j] = arr[j-1]
			} else {
				break
			}
		}
		arr[j] = current
	}
	return arr;
}

console.log(insertionSort([4, 3, 9, 7, 2, 6]))