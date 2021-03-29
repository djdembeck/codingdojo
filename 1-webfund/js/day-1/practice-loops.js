// Print out all odd numbers from 1 to 20
for (let i = 1; i < 20; i+=2) {
    console.log(i)
}

// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
var j = 0
for (var i = 1; i <= 5; i++) {
    var j = (j + i)
    console.log("Num: " + i + ", Sum: " + j)
}