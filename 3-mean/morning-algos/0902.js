function unionSort(arr1, arr2) {
	let newArr = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if(arr1[i] == arr2[j]){
            newArr.push(arr1[i])
			i++
			j++
        } else if (arr1[i] < arr2[j]){
			newArr.push(arr1[i])
			i++
		} else {
			newArr.push(arr2[j])
			j++
		}
	}
	while (i < arr1.length) {
		newArr.push(arr1[i])
		i++
	}
	while (j < arr2.length) {
		newArr.push(arr2[j])
		j++
	}

	return newArr;
}

array1 = [1, 2, 2, 2, 7]
array2 = [2, 2, 6, 6, 7]
console.log(unionSort(array1, array2))