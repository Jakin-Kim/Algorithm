function findBugInApples(arr) {
  // TODO: 여기에 코드를 작성합니다. 5분만에 완료 :)
  
  // 1. 배열의 요소(배열)를 하나씩 순회하기
  for (let i = 0; i < arr.length; i++) {
  // 2. 배열 내 배열의 요소('A' 또는 'B'로 이루어진 문자)를 순회하면서 
    for (let j = 0; j < arr[i].length; j++) {
  // 3. 'B'요소가 있는 경우, 각 인덱스 값을 담은 배열을 리턴
      if (arr[i][j] === 'B') {
        return [i, j];
      }
    }
  }
 
}
