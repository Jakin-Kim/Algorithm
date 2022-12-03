function maxSubarraySum(arr, num){
    
    if(arr.length < num) return null;
    
    // num 갯수만큼의 요소를 가지는 부분배열을 만든다.
    let subArr = [];
    let max = 0;
    for(let i = 0; i < num; i++) {
        subArr.push(arr[i]);
        max += arr[i];
    }
  
    for(let j = num; j < arr.length; j++) {
        subArr = subArr.slice(1);
        subArr.push(arr[j]);
        if(max < subArr.reduce((acc, cur) => acc + cur)) {
            max = subArr.reduce((acc, cur) => acc + cur);
        }
    }
    return max;
}
