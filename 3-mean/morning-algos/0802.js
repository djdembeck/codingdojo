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

function isRotation(str1, str2) {
	if (str1.length != str2.length) {
		return false;
	}
	for (let i = 0; i < str2.length; i++) {
		if (str2[i] == str1[0]) {
			let match = true;
			for (var j = 1; j + i < str2.length; j++) {
				if (str1[j] != str2[i+j]) {
					match = false;
					break;
				}
			}
			for (let k = 0; j + k < str1.length; k++) {
				if (str1[j+k] != str2[k]) {
					match = false;
					break
				}
			}
			if(match){
				return true;
			}
		}
	}
	return false;
}

console.log(isRotation(input_str, rotateString(input_str, input_int)))