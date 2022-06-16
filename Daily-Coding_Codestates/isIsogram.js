function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  
  // 입력값: 문자열
  // 출력값: 아이소그램(각 알파벳을 한번씩만 사용해서 만든 단어나 문구)를 리턴
  if (str.length === 0) {
    return true;
  }
  // 1. 각 문자열의 갯수를 담은 객체를 리턴하기 위해서 빈 배열 만들기
  let result = {};
  let lowerstr = str.toLowerCase()
  // 2. 문자열 순회하기
  for (let i = 0; i < lowerstr.length; i++) {
  // 3. 만약 현재 순회하고 있는 문자가 객체에 없다면(객체도 순회하면서 있는지 유무 확인하기),
    if (result[lowerstr[i]] === undefined) {
  // 4. 빈 객체에 해당 문자의 갯수가 담긴 프로퍼티를 추가해주기
      result[lowerstr[i]] = 0 // 문자가 등장한 적이 없으니까 일단 0으로 할당해주기
      result[lowerstr[i]] = 1; // 지금 순회하는 당시 한번 생긴거니까 바로 1을 재할당하기
    } else {
      result[lowerstr[i]] += 1;
    }
  } // 5. 문자열의 각 문자를 키로, 문자의 갯수를 값으로 갖는 새로운 객체(result) 생성됨

  // 6. 다시 한번 문자열을 반복하면서 새로 생성된 객체(result)의 프로퍼티 값의 갯수와 비교하기
  for (let i = 0; lowerstr.length; i++) {
    if (result[lowerstr[i]] > 1) {
      return false;
    } else {
      return true;
    }
  }
}
