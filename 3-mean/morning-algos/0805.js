// function comibeWords(arr) {
// 	combinations = [];
// 	for (let i = 0; i < arr[0].length; i++) {
// 		var newStr1 = arr[0][i]
// 		for (let j = 0; j < arr[1].length; j++) {
// 			newStr2 = arr[1][j]
// 			for (let k = 0; k < arr[2].length; k++) {
// 				newStr3 = arr[2][k]
// 				combinations.push(`${newStr1} ${newStr2} ${newStr3}`)
// 			}
// 		}
// 	}
// 	return combinations;
// }

function comibeWords(input, partial = '', position = 0, output = []) {
	// Push partial to end
	if (position == input.length) {
		output.push(partial);
	}
	else {
		for (let i = 0; i < input[position].length; i++) {
			comibeWords(input, partial + `${input[position][i]} `, position + 1, output);
		}
	}
	return output;
}

words = [
    ["quick", "lazy"],
    ["brown", "red", "grey"],
    ["fox", "dog"],
];
console.log(comibeWords(words))