function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.

  // [1, 2, 3] -> [3, 2, 1]

  if (arr.length === 0) {
    return arr;
  }
  let [head, ...tail] = arr;
  // head === arr[0] // 그냥 첫번째 놈!!
  return reverseArr(tail).concat(head);
// 포인트1: reverseArr라는 함수가 똑같이 계속 사용될 수 있는 함수이어야 해!!
  // 들어오는 값의 형식들이 모두 일정해돼 항상!!
// return 아니면 여기 뭔가 오거나 reversArr(뭐 이런식이야 항상!!!) 잊지마!!
}
