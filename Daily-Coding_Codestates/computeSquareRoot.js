function computeSquareRoot(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 2이상의 수
  // 출력값: 제곱근 값을 소수점 둘째 자리까지 리턴(.toFixed() 메서드 사용하기)
    
  // 바빌로니아 법의 점화식(recurrence formula) 사용하기
  // 1. 제곱근의 초기값과 반복문을 통해서 반복할 초기값 설정
  let result = 1, count = 1, rInteger = 1; 

  // 2. 소수점이 없는 경우(num가 제곱근의 제곱인 경우) 소수점이 아닌 정수를 리턴하기
  while(true) { // 특정 조건없이 제곱수 전달받으면 무조건 실행하고 넘어가라!!
    if(rInteger * rInteger === num) {
      return rInteger;
    } else if (rInteger * rInteger > num) {
      break;
    }
    rInteger++;
  }
  // 3. 소수점 셋째 자리에서 반올림하기 때문에 3회차 반복하기 
  while(count <= 3) {
    // 바빌로니아 법으로 제곱근 구하는 공식 사용
    result = (result * result + num) / (2 * result);
    count++;
  }

  // 4. 소수점 셋째 자리에서 반올림하여 둘째 자리까지 리턴하는 .toFixed() 메서드 사용하기
  return Number(result.toFixed(2));
}
