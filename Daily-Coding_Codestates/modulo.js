function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 두 수(num1, num2)
  // 출력값: num1을 num2로 나눈 나머지
    // 나눗셈(/), 나머지(%) 연산자 사용금지
  
  if (num2 === 0) {
    return 'Error: cannot divide by zero';
  }
  if (num2 > num1) {
    return num1;
  }

  for (let i = 0; i < num1; i++) {
  // 처음에는 num2 > num1 * i보다 큰 상황을 생각해서 계속 빼줄까 생각했는데,
  // 경우가 너무 많아서 하나씩 계속 빼는게 아니라 '여사건(num1 < num2 * i)'을 생각해서 간단하게 해결했다.
    if (num1 < num2 * i) {
      return num1 - (num2 * (i - 1));
    } else if (num2 === num1 * i) {
      return 0;
    } 
  }
}
