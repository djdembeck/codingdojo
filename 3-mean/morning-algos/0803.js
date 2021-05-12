// Cheeky way
// function dedupe(input) {
// 	let newStr = [];
// 	for (let i = input.length - 1; i >= 0; i--) {
// 		if (newStr.includes(input[i]) == false) {
// 			newStr.push(input[i]);
// 		}
// 	}
// 	return newStr.reverse().join('');
// }

// Legit way
function dedupe(input) {
	let newStr = [];
	for (let i = input.length - 1; i >= 0; i--) {
		var dupe = false;
		for (let j = 0; j < input.length; j++) {
			if (newStr[j] == input[i]) {
				dupe = true;
			}
		}
		if (!dupe) {
			newStr.push(input[i])
		}
	}
	var finStr = ""
	for (let i = newStr.length - 1; i >= 0; i--) {
		finStr += newStr[i]
	}
	return finStr;
}

input = "Snaps! crackles! pops!";
console.log(dedupe(input))

function isUnique(input) {
	let newStr = ""
	for (let i = 0; i < input.length; i++) {
		var count = 0;
		var target = input[i];
		for (let j = 0; j < input.length; j++) {
			if (target == input[j]) {
				count++
			}
		}
		if (count == 1) {
			newStr += target
		}
	}
	return newStr;
}

strInput = "Snap! Crackle! Poop!";
console.log(isUnique(strInput))