function arrLength(arr) {
  // TODO: 여기에 코드를 작성합니다.

  // arr = [1, -2, 1, 3]
  
  let tail = arr.slice(1);
  // [] => 0
  if (arr.isEmpty()) return 0

  return 1 + arrLength(tail);
  // 포인트1: 결국에는 우리가 구하려고 하는 값을 리턴에 넣어주기
  // 포인트2: 우리가 원했던 count를 arrLength로 생각하기

  // arr[0] + arr.slice(1)
  // 1 + [-2, 1, 3] count++
  // 1 + -2 + [1, 3] isEmpty === false -> count++
  // 1 + -2 + 1 + [3] isEmpty === false -> count++
  // 1 + -2 + 1 + 3 isEmpty === true -> return count + 1
  // [1] => 1
  // [1, -2] => 2 => arrLength([1]) + arrLength([-2])
  // [1, -2, 1] => 3 => arrLength([1]) + arrLength([-2]) + arrLength([1])
  // [1, -2, 1, 3] => 4 
}
