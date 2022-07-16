function power(base, exponent) { 
  // 지수가 0이면 밑(base)이 어떤 수이든지 결과는 1이 된다.
  if (exponent === 0) return 1;

  // base^exponent와 동일한 값을 가지는 함수를 만들기 
    // -> 왜? 마지막에는 94,906,249로 나눈 나머지를 리턴해야하니까
  // 1. 지수를 2로 나누기 -> 왜? 조금 있다가 둘을 합쳐서 위에 조건에 만족시킬거야 
  const half = parseInt(exponent / 2);
  // 2. power(base, exponent)결과값의 절반이 되는 함수를 만들기
  const temp = power(base, half);
  // 3. temp * temp는 base^exponent의 값과 동일하지만 결과는 94,906,249로 나눈 나머지이어야 한다. 
  const result = (temp * temp) % 94906249;

  // 4. 지수가 홀수이면
  if (exponent % 2 === 1) { 
    // parseInt를 사용하면서 내림처리되었기 때문에 밑(base)을 한번 더 곱해준 값에 94906249로 나눈 값을 리턴한다.
    return (base * result) % 94906249; 
  }
  // 5. 지수가 짝수이면 
  else {
    // 위에서 구한 결과값을 그대로 리턴한다.
    return result;
  }
}
