// isPalindrome(input)
// input is a string
// output is true if the string forms a palindrome and false otherwise
// (the boolean true, not the string "true")
// for the purposes of this function, we're considering spaces,
// punctuation, etc. for determining if a palindrome is valid or not
// "racecar" -> true
// "Racecar" -> false
// "race car" -> false
// "tacocat" -> true
// "abba" -> true
// "abbba" -> true
// "abb ... bba" -> true
// "a" -> true (?)
// "" -> true
// "literally anything that is not a palindrome" -> false
// suggestion: no need to use .split()
// note: don't use .reverse()

function isPalindrome(input) {
	// Check for blank input
	if (input == "") {
		return true
	}

	// only run half of word
	for (let i = 0; i < input.length / 2; i++) {
		// check if first and last char are same
		if (input[i] != input[input.length - 1 - i]) {
			return false
		}
	}
	return true
}

word = "racecar"
console.log(isPalindrome(word))

// longestPalindrome(input)
// input is a string
// return the longest substring inside your input that is a palindrome
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "aba" or "aca"
// "abcde" -> "a" or "e", but probably "a"
// "a" -> "a" (lol)
// "racecar" -> "racecar"
// "I like to drive the racecar extremely fast" -> "e racecar e"
// suggestion: don't use your previous isPalindrome function
// suggestion: .substring() ... ?

// function longestPalindrome(input) {
// 	newarr = []
// 	for (let i = 0; i < input.length; i++) {
// 		var left = 0;
// 		var right = 0; 
// 		while (input[i - 1 - left] == input[i]) {
// 			console.log("Looking at left")
// 			console.log(input[i - 1 - left])
// 			console.log(input[left])
// 			left++;
// 		} 
// 		while (input[i + 1 + right] == input[i]) {
// 			console.log("Looking at right")
// 			console.log(input[i + 1 + right])
// 			console.log(input[right])
// 			right++;
// 		}
// 		while (input[i - 1 - left] == input[i + 1 + right]) {
// 			console.log(input[i - 1 - left], input[i + 1 + right])
// 		}
// 	}
// }

// word = "qwertttreqwerewy"
// console.log(longestPalindrome(word))