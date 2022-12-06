// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    // base case
    if(!arr.length) return 0;
    
    // recursive case
    return arr.reduce((acc, cur) => acc * cur);
}
