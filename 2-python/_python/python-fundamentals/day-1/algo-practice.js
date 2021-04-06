// parensValid(input)
// input is a string
// return true if the input has a valid configuration of parentheses and false otherwise
// by "return true/false" I mean the boolean value, not a string
// what's valid?
// - no more open parens than close parens or vice versa
// - no close parens that appear before a valid open paren
// - ignore all other characters that are not ( and )
// - () -> true
// - (()) -> true
// - (q(a)(x)(!(7(xx)(34)(2, 7, 11)))) -> true
// - )( -> false
// - (() -> false
// suggestion - don't bother trying to split the string, it won't do us any good
// suggestion again - do we have to check every single character in the input?
// hypothetical input: ) followed by one billion characters
// or: a) followed by one billion characters
// or: a37()) followed by one billion characters

function parensValid(str) {
	var num_open = 0
	var num_close = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] == ")" && num_open == 0) {
			return false
		} else {
			if (str[i] == "(") {
				num_open++
			} else if (str[i] == ")") {
				num_close++
			}
		}
	}
	if (num_open - num_close != 0) {
		return false
	} else {
		return true
	}
}

console.log(parensValid(")("));

// bracesValid(input)
// as above, but for parentheses, curly brackets (or curly braces) and square brackets
// -for- -now-: don't worry if there's some weirdness where brackets and parentheses are
// interlinked with each other - we'll handle that later
// ([)] -> true (?????)
// ()[]{} -> true
// (] -> false
// x(37[q{3, 7, 9}{22, 6, 91}])(32q) -> true
// ()[ -> false

function bracesValid(str) {
	var parens_num_open = 0
	var parens_num_close = 0
	var bracket_num_open = 0
	var bracket_num_close = 0
	var curly_num_open = 0
	var curly_num_close = 0
	for (let i = 0; i < str.length; i++) {
		// check parens 
		if (str[i] == ")" && parens_num_open == 0) {
			return false
		} else {
			if (str[i] == "(") {
				parens_num_open++
			} else if (str[i] == ")") {
				parens_num_close++
			}
		}
		// check brackets
		if (str[i] == "]" && bracket_num_open == 0) {
			return false
		} else {
			if (str[i] == "[") {
				bracket_num_open++
			} else if (str[i] == "]") {
				bracket_num_close++
			}
		}
		// check curly
		if (str[i] == "}" && curly_num_open == 0) {
			return false
		} else {
			if (str[i] == "{") {
				curly_num_open++
			} else if (str[i] == "}") {
				curly_num_close++
			}
		}
	}
	// compare paren counts
	if (parens_num_open - parens_num_close != 0) {
		console.log(parens_num_open)
		return false
	// compare bracket counts
	} else if (bracket_num_open - bracket_num_close != 0) {
		console.log(bracket_num_open)
		return false
	// compare curly counts
	} else if (curly_num_open - curly_num_close != 0) {
		console.log(curly_num_open)
		return false
	// if everything matches, return true
	} else {
		return true
	}
}

console.log(bracesValid("()["));

// bonus: what if we also want to check angle brackets (< and >)? what if sometimes we
// care about curly braces but sometimes we don't?
// suggestion - go back to parensValid/bracesValid and see if they can be improved in some way