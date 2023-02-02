function getLastElementOfProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 객체와 키(프로퍼티)
  // 출력값: 프로퍼티 값이 배열인 경우, 배열의 마지막 요소를 출력

  // 1. 프로퍼티 값이 배열인지 아닌지 -> if문으로 array is array 메서드
    // 1-1. 값이 배열이 아니면 undefined
  // 2. 프로퍼티 값이 배열이면, 배열의 마지막 요소를 출력

  if (Array.isArray(obj[property]) === true) {
    return obj[property][obj[property].length - 1];
  } else {
    return undefined;
  }
}
