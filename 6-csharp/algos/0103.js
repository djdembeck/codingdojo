//remove array duplicates. Do not alter the
//original array. Return a new array with the values
//in the order they first appear in the original
//[1,2,1,3,4,2] -> [1,2,3,4]

function removeDuplicates(arr){
    let  dupeObj = {};
    for (let i = 0; i < arr.length; i++) {
        dupeObj[arr[i]] = arr[i]
    }
    return Object.values(dupeObj)
}

console.log(removeDuplicates([1,2,1,3,4,2]));
console.log(removeDuplicates([4,8,4,4,15,4,15,16,23,8,42,4]));