// 1
// Using the given array:
// varcopy testArr = [6,3,5,1,2,4]
// Print each array value and the sum so far

j = 0
var testArr = [6,3,5,1,2,4]
for(var i = 0; i < testArr.length; i++){
    var j = (j + testArr[i])
    console.log("Num: " + testArr[i] + ", Sum: " + j);
}

// 2
// Multiply each value in the array by its array position

var testArr = [6,3,5,1,2,4]
for(var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
}

console.log(testArr);