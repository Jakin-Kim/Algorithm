// The test couldn't be passed with this function so it has to be revised...lol..

function numberSearch(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 문자열
  // 출력값: 문자열에서 숫자를 모두 찾아 더한 뒤에 해당 값을 
        // 문자열(숫자와 공백을 제외한 나머지) 길이로 나눈 값을 정수로 반올림하여 리턴

  // 우선 계산(문자열 길이를 나눈 값을 정수로 반올림)하기에 앞서
  // 계산이 가능한 상태(문자열 및 숫자)를 먼저 만들어야 한다.
  let strWithoutSpace = str.replaceAll(' ', '');
  let strWoNumAndSpace = '';
  let sumOfNum = 0;
  // 문자열(str)을 순회하기
  for (let i = 0; i < strWithoutSpace.length; i++) {
    // 어떻게 문자열 숫자를 찾을 수 있을까?
    // 순회하는 문자열 중에서 숫자가 있다면,
    if(Number(strWithoutSpace[i])) { 
      sumOfNum = sumOfNum + Number(strWithoutSpace[i]);
    } else {
      strWoNumAndSpace += strWithoutSpace[i];
    }
  }
  // 숫자와 공백이 제거된 문자열(strWoNumAndSpace)과
  // 문자열 내 숫자들을 모두 더한 값(sumOfNum)을 만들었다.

  return Math.round(sumOfNum / strWoNumAndSpace.length)
}
