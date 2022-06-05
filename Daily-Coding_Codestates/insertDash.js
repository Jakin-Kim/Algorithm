function insertDash(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력값: 숫자 문자열
    // 출력값: 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열
    let result = '';
    // 1. 문자열을 한글자씩 순회하면서
    for (let i = 0; i < str.length; i++) {
      result = result + str[i];
    // 2. 현재 인덱스의 문자와 다음 인덱스(+1)의 문자가 모두 홀수(나누고 나머지가 1)인 경우,
      if ((str[i] % 2 === 1) && (str[i + 1] % 2 === 1)) {
    // 3. '-'추가하여 리턴
        result = `${str[i]}-${str[i + 1]}`;
      }
    }
  
    return result;
  }
  