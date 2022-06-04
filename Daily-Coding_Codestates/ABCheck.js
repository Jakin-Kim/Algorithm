function ABCheck(str) {
    // code goes here
    
    // 입력값: 문자열
    // 출력값: 특정 조건이 존재하는지 여부(true/false)를 리턴
      // 조건1: 'a'로 시작해서 'b'로 끝나는 길이 5의 문자열 (대소문자 구분X)
      // 조건2: 'b'로 시작해서 'a'로 끝나는 길이 5의 문자열 (대소문자 구분X)
    
    if(str.length === 0) {
      return false;
    }
  
    // 1. 문자열(str)을 한글자씩 순회하기
    for(let i = 0; i < str.length; i++) {
      // 2. 각 문자열 중에 'a'나 'A'로 시작하고, 
        // 해당 인덱스 값을 기준으로 +4한 인덱스 값이 'b'나 'B'로 끝난다면,
      if((str[i] === 'a') || (str[i] === 'A')) {
        if((str[i + 4] === 'b') || (str[i + 4] === 'B')) { // 길이 5인 문자열
          return true;
        }
      }
  
      // 3. 각 문자열 중에 'b'나 'B'로 시작하고, 
        // 해당 인덱스 값을 기준으로 +4한 인덱스 값이 'a'나 'A'로 끝난다면,
      if((str[i] === 'b') || (str[i] === 'B')) {
        if((str[i + 4] === 'a') || (str[i + 4] === 'A')) { // 길이 5인 문자열
          return true;
        }
      } 
    }
    // 4. 모든 경우가 아닐 때는 false 리턴
    return false;
  }
  