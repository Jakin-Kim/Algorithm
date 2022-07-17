// naive solution
// const rotatedArraySearch = (rotated, target) => {
//   for (let i = 0; i < rotated.length; i++) {
//     if (rotated[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

const rotatedArraySearch = function (rotated, target) {
  let left = 0;
  let right = rotated.length - 1;
  // ex. [10, 11, 12, 13, 14, 3, 6, 7, 8, 9] -> target: 8 (여러가지 예시들을 되새김질하면서 이해해보기!)
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
  
    if (rotated[middle] === target) { // 3번째 반복에서 답이 출력된다.
      return middle;
    }
  // ex. [10, 11, 12, 13, 14, 3, 6, 7, 8, 9] -> target: 8 (여러가지 예시들을 되새김질하면서 이해해보기!)
    if (rotated[left] < rotated[middle]) { // 1번째 반복: 10 < 14, 2번째 반복: 3 < 7, 3번째 반복에서 답이 출력된다.
      // 왼쪽 절반이 정렬되어 있는 상태
      // (이 상태는 바뀌지 않고 첫번째 반복에서 조건이 해당되었다면 매반복마다 조건이 성립한다.)
      if (target < rotated[middle] && rotated[left] <= target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else { // rotated[left] > rotated[middle]
      // 오른쪽 절반이 정렬되어 있는 상태
      // (이 상태는 바뀌지 않고 첫번째 반복에서 조건이 해당되었다면 매반복마다 조건이 성립한다.)
      if (target <= rotated[right] && rotated[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
};
