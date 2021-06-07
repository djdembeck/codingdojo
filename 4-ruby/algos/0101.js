/* 
	Balance Point
	Write a function that returns whether the given
	array has a balance point BETWEEN indices, 
	where one side’s sum is equal to the other’s. 
*/

// Create a function called balancePoint that takes in an array as input

function balancePoint(arr) {
	if (arr.length > 1) {
		var sum_left = 0;
		for (let i = 0; i < arr.length; i++) {
			sum_left += arr[i];
			var sum_right = 0;
			for (let j = i + 1; j < arr.length; j++) {
				sum_right += arr[j];
			}
			if (sum_left == sum_right) {
				console.log("Break point: " + i)
				return true;
			}
		}
	}
	return false;
}

var arr1 = [5, 2, 1, 3, 3]
var arr2 = [3, 5, 2]
var arr3 = [6, 3, 3, 4, 2, 6, 24]

console.log(balancePoint(arr1))
console.log(balancePoint(arr2))
console.log(balancePoint(arr3))