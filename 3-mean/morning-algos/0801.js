function strToWord(input) {
	var arr = [];
	var new_word = "";
	for (let i = 0; i <= input.length; i++) {
		if (input[i] == " " || i == input.length ) {
			// start new word
			arr.push(new_word);
			new_word = "";
		} else {
			// add to word
			new_word += input[i]
		}
	}
	return arr;
}

input = "Sixty zippers were quickly picked from the woven jute bag."
console.log(strToWord(input))

function reverseWordOrder(arr) {
	outputStr = "";
	for (let i = arr.length - 1; i >= 0; i--) {
		outputStr += arr[i];
		if (i != 0 || i != arr.length - 1) {
			outputStr += " "
		}
	}
	return outputStr;
}

console.log(reverseWordOrder(strToWord(input)))