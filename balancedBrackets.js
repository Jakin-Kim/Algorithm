// naive solution
// const balancedBrackets = function (str) {
//   const stack = [];
//   const opener = '(';
//   const closer = ')';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === opener) {
//       stack.push(str[i]);
//     } else if (str[i] === closer) {
//       const top = stack.pop();
//       if (top !== opener) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// };

const balancedBrackets = function (str) {
  const stack = []; // str의 각 문자가 쌍을 이루는지 판별하기 위해 빈 배열 생성
  const opener = { // 각 bracket의 종류별로 key-value 쌍을 이루는 객체 생성
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const closer = '}])';

  for (let i = 0; i < str.length; i++) {
    if (str[i] in opener) { // 각 bracket의 종류별로 들어있는 객체의 key 값(열린 bracket)과 순회하고 있는 str과 같다면,
      stack.push(str[i]); // 빈 배열에 차곡차곡 쌓기
    } else if (closer.includes(str[i])) { 
    // str을 순회하면서 어떤 종류의 bracke이든지 닫히는 bracket이 등장했다면, 
    // (바로 직전은 쌍을 이루어야 한다) 
      // -> 왜? 주의사항에서 '괄호는 먼저 열리고 열린만큼만 닫혀야한다고 명시되어있기 때문에
      const top = stack.pop(); // 배열의 마지막 요소를 뽑아내기(pop은 마지막 요소 제거 후 제거한 요소 return)
      const pair = opener[top];
      if (pair !== str[i]) { // 직전 문자(괄호)와 쌍을 이루는지 여부를 살펴본다. 만약 아니라면,
        return false;
      }
    }
  }
  // 열린만큼 닫히는 괄호들의 쌍을 이루는(=opend 객체를 토대로 key-value 쌍을 이루는) str이었다면,
  // 위에서 이미 하나씩 pop을 통해 대조를 해봤기 때문에
  // 마지막 stack 배열은 0이 되면 true가 된다.
  return stack.length === 0;
};
