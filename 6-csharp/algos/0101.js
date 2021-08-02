//write a function that returns whether the given array
//has a balance point between indices, where one side's
//sum is equal to the other's
//note: the array is unsorted
//[1,2,3,4,10] -> true (point is between 4 and 10)
//[1,2,4,2,1] -> false
//[-2,-6,-8] -> true
function balancePoint(arr){
    // Start at index 0 and empty sum
    let leftIndex = 0
    let leftSum = 0
    // start at index 0 and total sum
    let rightIndex = 0
    let rightSum = arr.slice(rightIndex, arr.length).reduce((a,b)=>a+b,0)
    // Compare sums
    while (leftSum != rightSum) {
        // Check if we are at the end of the array
        if (leftIndex == arr.length) {
            return false
        }
        // Add to leftSum, remove from rightSum
        leftSum += arr[leftIndex]
        rightSum -= arr[leftIndex]
        // Increments
        leftIndex++
        rightIndex++
    }
    return true
}

console.log(balancePoint([1,2,3,4,10]));
console.log(balancePoint([1,2,4,2,1]));
console.log(balancePoint([-8,-6,-2]));