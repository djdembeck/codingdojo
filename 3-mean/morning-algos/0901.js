function intersectSortArr(arr1, arr2) {
	let newArr = [];
	let i = 0;
	let y = 0;
	while(i < arr1.length && y < arr2.length){
        //compare 2 values and push the smaller value into new arr
        if(arr1[i] == arr2[y]){
            newArr.push(arr1[i])
			i++
			y++
        } else if (arr1[i] < arr2[y]){
			i++
		} else {
			y++
		}
    }
	return newArr;
}

array1 = [1, 2, 2, 2, 7]
array2 = [2, 2, 6, 6, 7]
console.log(intersectSortArr(array1, array2))

function intersectSortArrDedupe(arr1, arr2) {
	let newArr = [];
	let i = 0;
	let y = 0;
	while(i < arr1.length && y < arr2.length){
        //compare 2 values and push the smaller value into new arr
        if(arr1[i] == arr2[y]){
            newArr.push(arr1[i])
            i++
			y++
        } else {
			i++
			y++
		}
    }
	return newArr;
}
console.log(intersectSortArrDedupe(array1, array2))