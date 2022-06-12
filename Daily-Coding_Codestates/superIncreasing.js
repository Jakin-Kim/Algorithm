function superIncreasing(arr) {
  // TODO: 여기에 코드를 작성합니다.

  // 입력값: 수를 요소로 갖는 배열
  // 출력값: 각 요소들이 그 이전의 요소들의 합보다 큰지 여부(true/false)를 리턴

  // 0번째 인덱스 값은 비교대상이 없으니 고정시키고 1번째 인덱스부터 시작!
  let sumOfNum = arr[0]; 
  for (let i = 1; i < arr.length; i++) {  
    // 1번째 인덱스 값을 순회할때 이전의 요소의 합보다 크다면 true, 아니면 false
    if (sumOfNum < arr[i]) {
      sumOfNum += arr[i];
    } else {
      return false;
    }
  }
  return true;
}
