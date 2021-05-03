function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		var marker = i;
		var lowest = arr[i];
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < lowest) {
				lowest = arr[j]
				marker = j;
			}
		}
		[arr[marker], arr[i]] = [arr[i], arr[marker]];
	}
	return arr;
}

input = [6, 4, 3, 8, 2, 7, 1]
console.log(selectionSort(input))