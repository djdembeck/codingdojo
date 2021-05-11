function rotateString(str, int) {
	var newStr = "";
	for (let i = int; i < str.length; i++) {
		newStr += str[i];
	}

	for (let j = 0; j < int; j++) {
		newStr += str[j];
	}

	return newStr;
}

input_str = "Never gonna give you up"
input_int = 5
console.log(rotateString(input_str, input_int))