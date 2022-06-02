function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.

  // 입력값: 2차원 배열(배열을 요소로 갖는 배열)
  // 출력값: 각 배열을 이용해서 만든 객체
  
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0 && obj[arr[i][0]] === undefined) { // arr[i][0]이 객체의 프로퍼티 키, arr[i][1]은 객체의 프로퍼티 값으로 되어야 한다.
  // 포인트1: 배열 내 배열(arr[i])의 요소가 없는(arr[i].length === 0) 경우를 세세하게 생각해줄 것이 아니라,
    // arr[i]의 요소가 있는 경우(arr[i].length > 0)를 생각해서 여사건은 무시하는 경우로 접근하기
  // 포인트2: 중복되는 키의 경우, 초기의 값을 사용하는 것을 undefined로 두기
      obj[arr[i][0]] = arr[i][1];
    }
  }

  return obj;
}
