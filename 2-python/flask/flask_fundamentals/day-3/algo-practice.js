// bookIndex(input)
// input is an array of integers (in order) representing pages in a book
// where a given term is found, and the output is a string suitable
// for printing in a book's index
// if the input is [58, 104, 105, 106, 192, 194, 195, 196]
// the output is: "58, 104-106, 192, 194-196"
// if the input is [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18, 19]
// the output is: "1-5, 8-12, 15, 17-19"

// suggestion: break this into two parts, or maybe even two
// functions - get your array of integers and turn it into an array
// of strings, then turn that array of strings into a single string
// [58, 104, 105, 106, 192, 194, 195, 196] 
// ["58", "104-106", "192", "194-196"]
// "58, 104-106, 192, 194-196"

// also a suggestion: remember that you can modify your for loop iterator
// during your loop! you can add to or subtract from i at any point

function bookIndex(arr) {
	newarr = []
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i+1] - arr[i]) == 1) {
			var firstnum = arr[i];
			while ((arr[i+1] - arr[i]) == 1) {
				var endnum = arr[i+1];
				i++;
			}
			numrange = `${firstnum}-${endnum}`
			newarr.push(numrange)
		} else {
			newarr.push(String(arr[i]));
		}
	}
	return newarr.toString()
}

console.log(bookIndex([58, 104, 105, 106, 192, 194, 195, 196]))