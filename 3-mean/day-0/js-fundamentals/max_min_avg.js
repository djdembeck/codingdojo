function maxMinAvg(input){
	var val = input[0];
	var max = val;
	var min = val;
	var sum = 0;
	for (let i = 0; i < input.length; i++) {
		if (input[i] > max) {
			var max = input[i];
		} else if (input[i] < min) {
			var min = input[i];
		}
		sum += input[i];
	}
	var avg = sum / input.length;
	return [max, min, avg]
}

console.log(maxMinAvg([1, -2, 9, 4]));