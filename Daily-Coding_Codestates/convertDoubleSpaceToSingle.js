function convertDoubleSpaceToSingle(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 1. 입력받은 문자열을 두 칸의 공백으로 구분하여 나누고 배열에 넣기
    // 2. 한 칸의 공백으로 join하고 리턴하기
  
    let singleSpacedStr = str.split('  ').join(' ');
    return singleSpacedStr;

    // Problem solving above is the way i've approached.
    // The methods like 'split', 'join' aren't used on the Reference.
    // But I guess it works more efficient.
    
    // Reference,
    //function convertDoubleSpaceToSingle(str) {
    //   let result = '';
    //   let before = '';
    //   for (let i = 0; i < str.length; i++) {
    //     // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
    //     // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
    //     if (before !== ' ' || str[i] !== ' ') {
    //       result = result + str[i];
    //     }
    //     before = str[i];
    //   }
    //   return result;
    // }
  }
