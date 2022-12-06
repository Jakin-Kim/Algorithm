function flatten(arr){
    let flat = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            flat = flat.concat(flatten(arr[i]));
        } else {
            flat.push(arr[i]);
        }
    }
    
    return flat;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
