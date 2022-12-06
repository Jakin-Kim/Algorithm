function capitalizeWords(arr) {
    
    let capitalizedArr = [];
    function makeCapitalizedChar(array) {
        // base case
        if(!array.length) return;
        
        let capitalizedChar = array[0].toUpperCase();
        capitalizedArr.push(capitalizedChar);
        
        // recursive case
        return makeCapitalizedChar(array.slice(1));
    }
    
    makeCapitalizedChar(arr);
    
    return capitalizedArr;
}

// capitalizeWords(['car', 'banana', 'potato', 'apple']); -> ['CAR', 'BANANA', 'POTATO', 'APPLE'];
