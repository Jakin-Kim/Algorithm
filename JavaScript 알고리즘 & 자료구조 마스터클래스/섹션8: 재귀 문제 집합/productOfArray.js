// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    // base case
    if(!arr.length) return 1;
    
    // recursive case
    return arr[0] * productOfArr(arr.slice(1));
}
