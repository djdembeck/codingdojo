function strEncode(input) {
	let newStr = ""
	for (let i = 0; i < input.length; i++) {
		var count = 1;
		var j = i
		while (input[i] == input[j+1]) {
			count++
			j++
		}
		newStr += `${input[i]}${count}`
		i = j;
	}
	return newStr;
}

var str = "aaaabbcdddeeeeeeeeeeefff";
console.log(strEncode(str))

function strDecode(input) {
	let newStr = ""
	// Number we get next to character
	var num = 0;
	// count to handle sequential numbers
	var count = 0;
	for (let i = 0; i < input.length - 1; i+=2) {
		if (isNaN(parseInt(input[i+1]))) {
			console.log(`Not a number ${input[i+1]}`)
		// Check for sequential numbers
		} else if (!isNaN(parseInt(input[i+2]))) {
			let somestr = input[i+1] + input[i+2]
			// convert what we know to be a number from a string
			num = parseInt(somestr);
			count++
		// else we are working with a single number
		} else {
			num = parseInt(input[i+1]);
		}

		// add character num of times to end string
		if (num != 0) {
			newStr += input[i].repeat(num)
		}

		num = 0;
		// if incremented by sequential check
		i += count
	}
	return newStr;
}

console.log(strDecode(strEncode(str)))