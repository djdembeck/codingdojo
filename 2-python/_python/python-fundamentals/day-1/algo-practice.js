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

}

console.log(bracesValid("()["));

// bonus: what if we also want to check angle brackets (< and >)? what if sometimes we
// care about curly braces but sometimes we don't?
// suggestion - go back to parensValid/bracesValid and see if they can be improved in some way