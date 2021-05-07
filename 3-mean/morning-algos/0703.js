//combine arrays
//given 2 sorted arrays
//create 1 sorted array in N time

function combineArr(arr1,arr2){
    let i = 0
    let y = 0
    let result = []
    while(i < arr1.length && y < arr2.length){
        //compare 2 values and push the smaller value into new arr
        if(arr1[i] < arr2[y]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[y])
            y++
        }
    }
    while(i < arr1.length){
        result.push(arr1[i])
            i++
    }
    while(y < arr2.length){
        result.push(arr2[y])
            y++
    }
    return result
}

// arr1 = [1,4,8]
// arr2 = [3,7,9,10]
// console.log(combineArr(arr1,arr2))

//merge sort
//given an unsorted array, merge sort in NlogN time
//split array in half recursively until its single values
//recombine split arrays using combineArray

function merge(arr){
//escape
    if(arr.length == 1){
        return arr
    }
//iteration
    let left = arr.slice(0,Math.floor(arr.length/2))
    let right = arr.slice(Math.floor(arr.length/2))
    return(combineArr(merge(left),merge(right)))
}

arr=[3,6,8,34,7,9,4,2,6,8,4,2,1,3,6,8,0,11]
console.log(merge(arr))