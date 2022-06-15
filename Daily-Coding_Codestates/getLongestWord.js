function getLongestWord(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력: 문자열
  // 출력: 문자열에서 가장 긴 단어
  // (1) 문자열에서 각 문자를 나눠서 배열에 담기
  // (2) 배열에 담긴 각 문자 길이 구하기

  let arr = str.split(' ');
  let result = arr[0];

  if (str === arr[0]) {
    return str;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > result.length) {
        result = arr[i];
    } 
  }
  return result;
}
