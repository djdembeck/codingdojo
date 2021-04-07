// generateCoinChange(input)
// input is an integer representing an amount of money
// output is an object representing the most optimal
// (i.e. fewest coins) way to represent that amount
// with standard U.S. coins
// if the input is 74 cents, the output would be:
// {quarters: 2, dimes: 2, nickels: 0, pennies: 4}
// if the input is 109 cents, the output would be:
// {quarters: 4, dimes: 0, nickels: 1, pennies: 4}

function generateCoinChange(input) {
    var output = {
        'quarters':0,
        'dimes': 0,
        'nickels': 0,
        'pennies': 0
    }

    return output
}

// generateCoinChangeWithGivenValues(input, values)
// input is an integer representing an amount of money
// values is an array of arrays - each array represents a
// denomination of currency (string) and its value (integer)
// (a denomination of 1 will always be present)
// that array is in order of denomination
// the output is an object representing the most optimal
// way to represent that amount given the denominations
// if the input is 127 cents, and the values are:
// [ ['metadime', 15],
//  ['supernickel', 6]
//  ['very regular penny', 1]]
// the output would be:
// {metadimes: 8, supernickels: 1, very regular pennys: 1}
// (note the pluralization)
// if the input was 127, but the values were:
// [ ['halfquarter', 12],
//  ['greater nickel', 8],
//  ['lesser dime', 3]
//  ['just-a-penny', 1]]
// the output would be:
// {halfquarters: 10, greater nickels: 0, lesser dimes: 2, just-a-pennys: 0}

function generateCoinChangeWithGivenValues(input, values) {

}

var values_a = [['metadime', 15], ['supernickel', 6], ['very regular penny', 1]];
var values_b = [['halfquarter', 12], ['greater nickel', 8], ['lesser dime', 3], ['just-a-penny', 1]];
var values_c = [['half-dollar', 50], ['dimes', 10], ['pennies', 1]];

console.log(generateCoinChangeWithGivenValues(127, values_a));