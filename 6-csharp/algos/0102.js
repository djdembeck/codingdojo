//Given a sorted array and a value, return whether the
//array contains that value. Do not sequentially iterate
//the array. Instead, 'divide and conquer', taking
//advantage of the fact that the array is sorted.
//try not to use built in functions, if you have to then so be it

function binarySearch(arr, num){
    let midPoint = arr[Math.ceil(arr.length/2)]
    
    // Found it!
    if (num == midPoint) {
        return true;
    }

    // Stuck between 2
    else if (arr.length == 2) {
        if (num == arr[0] || num == arr[1]) {
            return true;
        }
    }

    else if (num > midPoint) {
        // Slice starting at halfway
        newarr = arr.slice(Math.ceil(arr.length/2))
        return binarySearch(newarr, num)
    }

    else if (num < midPoint) {
        // Slice between 0 and halfway
        newarr = arr.slice(0, Math.ceil(arr.length/2))
        return binarySearch(newarr, num)
    }

    return false
}

console.log(binarySearch([0,1,2,3,4,8,15,16,23,42,108,109,115,122,241,298,500], 500));
console.log(binarySearch([0,1,2,3,4,8,15,16,23,42,108,109,115,122,241,298,500], 3));
console.log(binarySearch([0,1,2,3,4,8,15,16,23,42,108,109,115,122,241,298,500], 157));