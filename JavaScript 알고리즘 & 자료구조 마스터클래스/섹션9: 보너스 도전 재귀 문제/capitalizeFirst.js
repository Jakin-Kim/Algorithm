// solution1. -> 내부 재귀함수 생성
function capitalizeFirst (arr) {
  
  let capitalizedArr = [];
  function makeCapitalizedArr(array) {
    
    // base case
    if(!array.length) return;
    
    let firstChar = array[0][0];
    let slicedChar = array[0].slice(1);
    let capitalizedChar = firstChar.toUpperCase() + slicedChar;
    capitalizedArr.push(capitalizedChar);
  
    // recursive case  
    return makeCapitalizedArr(array.slice(1));
  }
  makeCapitalizedArr(arr);
 
  return capitalizedArr;
}

// solution2. -> 외부 값을 변형시켜 재귀함수로 해결
let result = [];
function capitalizeFirst(arr) {
    
    // base case
    if(!arr.length) {
        return;
    } else {
        let firstChar = arr[0][0];
        let slicedChar = arr[0].slice(1);
        let capitalizedChar = firstChar.toUpperCase() + slicedChar;
        result.push(capitalizedChar);
        capitalizeFirst(arr.slice(1));
    }
    // recursive case
    return result;
}

// capitalizeFirst(['car','taco','banana']); -> ['Car','Taco','Banana']
