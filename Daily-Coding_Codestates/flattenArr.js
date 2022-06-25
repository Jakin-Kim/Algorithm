// 내가 계속해서 실수했던 부분: 새로운 배열을 할당해주고 거기에 push하려고 했다.
// 해결방법: 배열의 요소가 배열이면 구조분해할당으로 새로운 배열에 계속해서 넣어주고 배열이 아니면 contcat으로 붙여주면 됐다.

function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.

  // base case
  if (arr.length === 0) { // 빈 배열인 경우, 빈 배열을 리턴
    return [];
  }

  // recursive case
  const [head, ...tail] = arr; // 구조 분해 할당으로 배열을 첫 요소와 나머지 요소들을 나눠주기
  if (Array.isArray(head)) { // 첫 요소가 배열이면
    // 배열 안에 요소만 빼서(구조분해할당으로) 새로운 배열을 만들고 자기함수의 전달인자로 전달해서(재귀적으로) 반복하기
    return flattenArr([...head, ...tail]); 
    // (참고: 재귀를 통해서 순회를 할 것이기 때문에 for문을 사용하지 않아도 된다)
  } else { // 요소가 배열이 아니면
    // 해당 요소를 새로운 배열에 담고, concat으로 재귀적으로 실행된 함수의 결과를 새로운 배열에 붙이기
    return [head].concat(flattenArr(tail)); 
  } 
}
