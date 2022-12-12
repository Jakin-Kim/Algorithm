function binarySearch(sortedArr, val){
  let leftIdx = 0;
  let rightIdx = sortedArr.length - 1;
  let middleIdx = Math.ceil((leftIdx + rightIdx) / 2)
  
  while(leftIdx < rightIdx) {
    middleIdx = Math.ceil((leftIdx + rightIdx) / 2)
    if(val < sortedArr[middleIdx]) rightIdx = middleIdx;
    if(val > sortedArr[middleIdx]) leftIdx = middleIdx;
    if(val === sortedArr[middleIdx]) return middleIdx;
  }
  
  return -1;
}
