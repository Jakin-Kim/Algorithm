function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 배열
  // 출력값: 첫 요소와 마지막 요소를 키와 값으로 하는 객체

  // 1. 빈 객체를 만들기
   let result = {};
  if (arr.length > 0) {
    result[arr[0]] = arr[arr.length - 1];
  }
  return result;

}
