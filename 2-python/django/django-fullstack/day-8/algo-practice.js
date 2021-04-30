// binarySearch(input, target, left, right)
// given an input (a list of sorted integers) and a target value to search for
// return true if the value is found in the list and false otherwise
// we gotta do this recursively!
// you're going to need another two parameters
// this will have a big O time complexity of log n
// https://www.bigocheatsheet.com/
// left and right represent indexes of the list

function binarySearch(input, target, left = 0, right = input.length - 1) {

	var middle = Math.floor((right + left) / 2);
	
	if (left > right) {
		return false;
	}
	else if (input[middle] == target) {
		return true;
	}
	else if (input[middle] < target) {
		return binarySearch(input, target, middle + 1, right)
	}
	else {
		return binarySearch(input, target, left, middle - 1)
	}
}

input = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12]
console.log(binarySearch(input, 6));
console.log(binarySearch(input, 1));
console.log(binarySearch(input, 2));
console.log(binarySearch(input, 11));

console.log(binarySearch(input, -1));
console.log(binarySearch(input, 24));
console.log(binarySearch(input, 9));