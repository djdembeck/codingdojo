function removeDupes(arr) {
	var newArr = [arr[0]];
	for (let i = 0; i < arr.length; i++) {
		let count = 0;
		while (count < newArr.length) {
			if (newArr[count] == arr[i]) {
				break
			}
			count++
			if (count == newArr.length) {
				newArr.push(arr[i])
			}
		}
	}
	return newArr;
}

array = [1, 2, 1, 3, 4, 2]
console.log(removeDupes(array))