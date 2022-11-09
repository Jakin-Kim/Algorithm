// 정렬하고 병합할 함수 생성
const merge = (leftArr, rightArr) => {
  const sorted = []; 
  const totalLength = leftArr.length + rightArr.length;
  let leftIdx = 0, 
      rightIdx = 0;
  for(let i = 0; i < totalLength; i++) { // 단순히 비교횟수를 위해 for문 사용
    if(rightIdx === rightArr.length || leftArr[leftIdx] < rightArr[rightIdx]) {
      sorted.push(leftArr[leftIdx]);
      leftIdx++;
    } else {
      sorted.push(rightArr[rightIdx]);
      rightIdx++;
    }
  }
  return sorted;  
};

const mergeSort = function (arr) {
  
  // base case
  if(arr.length <= 1) return arr;

  // recursive case
  const midIdx = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted)
};
