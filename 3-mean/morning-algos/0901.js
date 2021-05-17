function intersectSortArr(arr1, arr2) {
	count = 0;
	newArr = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0 + count; j < arr2.length; j++) {
			if (arr1[i] == arr2[j]) {
				newArr.push(arr1[i])
				count++
				break
			}
		}
	}
	return newArr;
}

array1 = [1, 2, 2, 2, 7]
array2 = [2, 2, 6, 6, 7]
console.log(intersectSortArr(array1, array2))