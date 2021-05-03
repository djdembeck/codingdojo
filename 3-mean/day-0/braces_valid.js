// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function braces_valid(input){
	var last_index = 0;
	type_open = ['(', '[', '{']
	type_close = [')', ']', '}']

	for (let i = 0; i < input.length; i++) {
		if (input[i] == type_open[0]) {
			last = 0;
			last_index = i;
		} else if (input[i] == type_open[1]){
			last = 1;
			last_index = i;
		} else if (input[i] == type_open[2]){
			last = 2;
			last_index = i;
		}
		else{
			break
		}
	}

	if (type_close[last] == input[last_index + 1]) {
		return true;
	}

	return false;
}

console.log(braces_valid("{{()}}[]"))