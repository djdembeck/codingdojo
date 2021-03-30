// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function count() {
    arr = [];
    for (let i = 0; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(count());

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function even1000() {
    var sum = 0
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
            var sum = sum + i;
        }
    }
    return sum;
}

console.log(even1000());

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function odd5000() {
    var sum = 0
    for (let i = 0; i <= 5000; i++) {
        if (i % 2 === 1) {
            var sum = sum + i;
        }
    }
    return sum;
}

console.log(odd5000());

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iteratearr(arr) {
    var sum = 0
    for (let i = 0; i < arr.length; i++) {
        var sum = sum + arr[i];
    }
    return sum;
}

// edit below array for desired effects
var somearray = [1, 2, 5];

console.log(iteratearr(somearray));

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findmax(arr) {
    var highestnum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > highestnum) {
            highestnum = num;
        }
    }
    return highestnum;
}

var somearray = [-3,3,5,7];

console.log(findmax(somearray));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findaverage(arr) {
    total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    average = total / arr.length;
    return average;
}

var somearray = [1,3,5,7,20];

console.log(findaverage(somearray));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).


// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])


// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

