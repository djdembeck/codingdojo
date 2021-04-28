// inOrderCombinations(input, partial, position, output)
// return an array with all strings you could make with the characters from the
// given string, in the order that they're presented
// (output array order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (8)
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "ts", "kp", "ks", "ps",
// "tkp", "tks", "tps", "kps", "tkps"] (16)
// 2^n output elements
// test with at least 4 characters
// make sure to use recursion

function inOrderCombinations(input, partial = '', position = 0, output = []) {
	// Push partial to end
	if (position == input.length) {
		output.push(partial);
	}
	else {
		inOrderCombinations(input, partial, position + 1, output);
		partial = partial + input[position]
		inOrderCombinations(input, partial, position + 1, output);
	}
	return output;
}

console.log(inOrderCombinations('jrko'));