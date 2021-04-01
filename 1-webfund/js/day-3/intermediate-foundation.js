// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(x) {
    var sum = 0
    for (let i = 0; i <= x; i++) {
        sum += i;
    }
    return sum;
}

var y = 5
console.log(sigma(y));

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(x) {
    var sum = 1
    for (let i = 1; i <= x; i++) {
        sum *= i;
    }
    return sum;
}

var y = 5
console.log(factorial(y));

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibo(num) {
    var startnum = 1;
    var secondarynum = 0;
    var holder;
    for (let i = num - 1; i >= 0; i--) {
        holder = startnum;
        startnum += secondarynum;
        secondarynum = holder;
    }
    return secondarynum;
}

var y = 6;
console.log(fibo(y));

// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondtolast(arr) {
        if (arr.length < 2) {
            return null;
        }else {
            result = arr.length - 2;
            return arr[result];
        }
        
}

somearray = [42, true, 4, "Liam", 7];
console.log(secondtolast(somearray));

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthtolast(arr, selector) {
    if (arr.length < selector) {
        return null;
    }else {
        result = arr.length - selector;
        return arr[result];
    }
}

somearray = [5,2,3,6,4,9,7];
selector = 3;
console.log(nthtolast(somearray, selector));

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function seondlargest(arr) {
    var highestnum = 0;
    var secondhighest = 0;
    if (arr.length < 2) {
        return null;
    }else {
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            // find max
            if (num > highestnum) {
                highestnum = num;
            }
            if (num != highestnum && secondhighest < highestnum) {
                if (num > secondhighest) {
                    secondhighest = num
                }
            }
        }
    }
    return secondhighest;
}

var somearray = [42,1,4,3.14,7];
console.log(seondlargest(somearray))

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function duplicate(arr) {
    for (let i = arr.length -1; i >= 0; i--) {
        arr.splice(i, 0, arr[i]);
    }
    return arr;
}

var somearray = [4, "Ulysses", 42, false];
console.log(duplicate(somearray))