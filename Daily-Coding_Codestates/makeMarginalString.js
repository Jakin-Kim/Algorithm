function makeMarginalString(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 일단 시간이 없으니 reference 정답 제출하고 오답노트하며 반드시 다시 풀어볼 것
  // 입력: 문자열
  // 출력: 부분적으로 완성된 문자열을 전부 이어붙인 문자열

  // i = 0; str[0] = 'j'; 
    // -> 'j' 
  // i = 1; str[1] = 'a'; 
    // -> 'j' + ('j' + 'a') = str[0] + (str[0] + str[1])
    // (1) 문자열의 한 글자씩 돌면서 각 글자를 출력 (for문)
    // (2) 매 반복 시 출력되는 새로운 글자와 이전 글자들 합한다.
    // x = x + str[i]하면 결국 마지막 반복에서 문자열(전체 글자)을 리턴

  // i = 2; str[2] = 'k'; 
    // -> 'j' + ('j' + 'a') + ('j' + 'a' + 'k') 
    //    = str[0] + (str[0] + str[1]) + (str[0] + str[1] + str[2])

  // i = 3; str[3] = 'i'; 
    // -> 'j' + ('j' + 'a') + ('j' + 'a' + 'k') + ('j' + 'a' + 'k' + 'i') 
    //    = str[0] + (str[0] + str[1]) + (str[0] + str[1] + str[2]) + (str[0] + str[1] + str[2] + str[3])

  // i = 4; str[4] = 'n'; 
    // -> 'j' + ('j' + 'a') + ('j' + 'a' + 'k') + ('j' + 'a' + 'k' + 'i') + ('j' + 'a' + 'k' + 'i' + 'n')
    //    = str[0] + (str[0] + str[1]) + ((str[0] + str[1]) + str[2]) + ((str[0] + str[1] + str[2]) + str[3]) + ((str[0] + str[1] + str[2] + str[3]) + str[4])
    // 이전 출력된 각 문자 모두 + 반복 시 횟수(str[i].length)
  if (str === '') {
    return '';
  }
  let result = '';
  let process = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      process = process + str[j];
      result = result + process;
    }
  }

  return result;
}
