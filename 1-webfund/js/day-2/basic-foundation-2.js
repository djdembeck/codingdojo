// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function numtostring(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big"
        }
    }
    return arr;
}

var somearray = [-1,3,5,-5];

console.log(numtostring(somearray));

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function loglowreturnhigh(arr) {
    highestnum = 0;
    lowestnum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // find max
        if (num > highestnum) {
            highestnum = num;
        }
        // find min
        if (num < lowestnum) {
            lowestnum = num;
        }
    }
    console.log(lowestnum);
    return highestnum;
}

var somearray = [-1,3,5,-5];

console.log(loglowreturnhigh(somearray));

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printreturn(arr) {
    highestnum = 0;
    lowestnum = 0;
    var oddnum;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        // make sure we stop after first run
        if (oddnum == undefined) {
            // find odd number
            if (arr[i] % 2 === 1) {
                oddnum = arr[i];
            }
        }
    }
    secondtolast = arr[arr.length - 2];

    console.log(secondtolast);
    return oddnum;
}

var somearray = [-1,3,5,-5];

console.log(printreturn(somearray));

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function double(arr) {
    newarr = [];
    for (let i = 0; i < arr.length; i++) {
        doubled = arr[i] * 2;
        newarr.push(doubled);
    }
    return newarr;
}

var somearray = [1,2,3];

console.log(double(somearray));

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function cntpos(arr) {
    var numpos = 0;
    for (let i = 0; i < arr.length; i++) {
        // First, let's count how many positives exist
        if (arr[i] > 0) {
            numpos++;
        }
    }

    // use counted positives and edit array
    arr[arr.length - 1] = numpos;
    return arr;
}

var somearray = [-1,1,1,1];

console.log(cntpos(somearray));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evenandodd(arr) {
    let evennum = 0;
    let oddnum = 0;
    for (let i = 0; i < arr.length; i++) {
        // find an even number
        if (arr[i] % 2 === 0) {
            evennum++;
        }
        // find odd number
        if (arr[i] % 2 === 1) {
            oddnum++;
        }
        
        // log 3 in a row
        if (oddnum === 3) {
            console.log("That's odd!")
            oddnum = 0;
        }

        if (evennum === 3) {
            console.log("Even more so!")
            evennum = 0;
        }
    }
    return "Finished";
}

var somearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(evenandodd(somearray));

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrseconds(arr) {
    let oddnum = 0;
    for (let i = 0; i < arr.length; i++) {
        // find odd number
        if (arr[i] % 2 === 1) {
            arr[i] = arr[i] + 1;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
    return arr;
}

var somearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(incrseconds(somearray));

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
function prevlengths(arr) {
    var strlength;
    for (let i = arr.length - 1; i > 0; i--){
        let prev = i - 1;
        strlength = arr[prev].length;
        arr[i] = strlength;
    }
    return arr;
}

var somearray = ["hello", "dojo", "awesome"];

console.log(prevlengths(somearray));


// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
function addseven(arr) {
    newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[i] + 7;
    }
    return newarr;
}

var somearray = [1,2,3];

console.log(addseven(somearray));

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr) {
    var replace = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++){
        [arr[i], arr[replace]] = [arr[replace], arr[i]];
        replace--;
    }
    return arr;
}

var somearray = [3,1,6,4,2];

console.log(reverse(somearray));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function makenegative(arr) {
    newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            newarr[i] = arr[i] * -1;
        } else {
            newarr[i] = arr[i];
        }
    }
    return newarr;
}

var somearray = [1,-3,5];

console.log(makenegative(somearray));

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
function hangry(arr) {
    var foodcnt = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            foodcnt++;
        }
    }
    if (foodcnt === 0) {
        console.log("I'm hungry");
    }
    return "stomach closed";
}

var somearray = ["food", "not food", "not food", "food"];

console.log(hangry(somearray));

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swapTowardCenter(arr) {
    var replace = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++){
        if (i != 1) {
            [arr[i], arr[replace]] = [arr[replace], arr[i]];
        }
        replace--;
    }
    return arr;
}

var somearray = [true,42,"Ada",2,"pizza"];

console.log(swapTowardCenter(somearray));

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scale(arr, y) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * y;
    }
    return arr;
}

var somearray = [1,2,3];
var y = 3

console.log(scale(somearray, y));