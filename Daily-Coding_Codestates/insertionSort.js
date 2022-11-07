const insertionSort = function (arr, callback = (item) => item) {
  // POINT1: 두번째 인자로 만든 callback 함수를 없애고 아래 풀이에서 callback 함수로 wrapping 된 친구들을 풀어주거나,
  // POINT2: 두번째 인자로 callback 함수를 사용할 때 callback 함수의 인자를 그대로 리턴해주는 함수로 작성하면 된다.
  let left, right;
  let sorted = [arr[0]];

  // arr = [4,2,1,6,3,8,7,5,9] // sorted = [1] (1회차 loop)
  for(let i = 1; i < arr.length; i++) { 
    if(callback(arr[i]) < callback(sorted[0])) {
      sorted.unshift(arr[i])
    } else {
      for(let j = 0; j < sorted.length; j++) {
        if(callback(arr[i]) < callback(sorted[j])) {
          left = sorted.slice(0,j);
          right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        } 
        if(callback(arr[i]) >= callback(sorted[sorted.length - 1])) { // sorted의 마지막 요소(가장 큰 요소)와 비교하기
          sorted.push(arr[i]);
          break;
        }
      }
    }
  }
  return sorted;
  
};
