function partition(arr){
    part = (arr[0]+arr[arr.length-1]+arr[Math.floor(arr.length/2)])/3
    for(let i = 1; i <arr.length; i++){
        while(arr[i] < part && arr[i-1] >= part){
            [arr[i],arr[i-1]] = [arr[i-1], arr[i]] //es6 swap
            i--
        }
    }
}

let arr = [5,2,7,3,4,6,1];
partition(arr)
console.log(arr)