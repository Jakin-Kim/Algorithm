function countAllCharacters(str) {
  // TODO: 여기에 코드를 작성합니다.

  // 입력값: 문자열
    // ex. 'apple'
  // 출력값: 각 문자(letter)를 키로 갖는 객체 {}
    // ex. {a: 1, p: 2, l: 1, e: 1}

  // 1. 객체를 만들어야 거기에 넣을 수 있다. -> 객체를 만들자
  let obj = {};

  // str의 각 문자를 순회하는 반복문을 작성해야한다.
  for (let i = 0; i < str.length; i++) { // str[0], str[1], str[2] ....
    // 만약에, 객체 안에 그 문자로 된 키가 없으면, 생성을 해주고 -> 없다? : 0
    // 있으면 + 1 해주기
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 0;
      // a는 아직 없기 때문에 {a: 0}을 먼저 만든다.
    }
    obj[str[i]]++ 
    // if문 밖으로 빠져나오자마자 1이 더해짐 // {a: 1(str[0]일 때), p: 2(str[1]일 때 +1 과 str[2]일 때 +1), ...}
  }
  return obj;
}
