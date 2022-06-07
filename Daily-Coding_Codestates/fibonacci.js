function fibonacci(num) {
    //피보나치 => 다음 수 = 맨 끝에 있는 수 + 그 앞에 있는 수
    // 숫자를 입력받아서 num번째 피보나치 수열을 리턴
    // 1. 피보나치 수열을 담아줄 배열을 하나 만든다.
    // 2. 반복문 num회 반복하면서
    // 3. 두 수의 합이 다음 숫자 -> 두 개의 숫자는 반드시 필요하다!
    let fib = [];
    for (let i = 0; i <= num; i++) {
      if (i === 0 || i === 1) {
        fib.push(i) // [0, 1]
      } else {
        // 현재 i는? 2
        // 현재 fib => [0, 1] // fib[0] + fib[1]
        // i = 3, fib -> [0, 1, 1] // fib.push(fib[1] + fib[2])
        // i = 4, fib -> [0, 1, 1, 2] // fib.push(fib[2] + fib[3])
        // i = 5, fib -> [0, 1, 1, 2, 3] // fib.push(fib[3] + fib[4])
        // i = 6, fib -> [0, 1, 1, 2, 3, 5] // fib.push(fib[4] + fib[5])
        // ...                                // ...
        // fib.push(fib[i - 2] + fib[i - 1])
        fib.push(fib[i - 2] + fib[i - 1]);
      }
    }
  
    return fib;
  }