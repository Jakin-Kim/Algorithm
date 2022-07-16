const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let low = 0;
  let high = arr.length - 1;

  while(low <= high) { // 
    let mid = parseInt((low + high) / 2);
    if(arr[mid] === target) { // 중간 값과 target이 같은지 계속 비교하기
      // 반으로 쪼개는 행위를 계속함으로써 결국 중간 값의 인덱스가 target의 인덱스와 같아짐
      return mid; // 반복문을 실행하다가 이곳에서 답이 나온다.
    }

    if(target < arr[mid]) { // 중간 값보다 target이 작으면,
      high = mid - 1;
    } else { // 중간 값보다 target이 작으면,
      low = mid + 1;
    }
  }
  // 아무 것도 해당되지 않으면
  return -1
};
