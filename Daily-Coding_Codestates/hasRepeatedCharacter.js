function hasRepeatedCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 일단 시간이 없으니 reference 정답 제출하고 오답노트하며 반드시 다시 풀어볼 것
  // 입력: 문자열
  // 출력: 해당 문자열에 중복된 문자(letter) 존재 여부(boolean)
    // 순서가 상관없는 조합(combination)이다.

  if (str === '') {
    return false;
  }

  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = i + 1; j <= str.length - 1; j++){
      if (str[i] === str[j]) {
        return true;
      }
    }
  }
  return false;
}

