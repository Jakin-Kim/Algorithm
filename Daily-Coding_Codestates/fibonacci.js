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
// ---------------------------------------------------------------------------
// naive solution: O(2^N)
// let fibonacci = function (n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// dynamic with meoization: O(N)
// 이미 해결한 문제의 정답을 따로 기록해두고,
// 다시 해결하지 않는 기법
// fibo(10)
// = fibo(9) + fibo(8)
// = fibo(8) + fibo(7) + fibo(7) + fibo(6)
// 여기까지만 보아도 동일한 문제가 중복으로 계산되는 것을 알 수 있다.
let fibonacci = function (n) {
  const memo = [0, 1];
  const aux = (n) => { // 함수 한개를 선언해준다.
    // 이미 해결한 적이 있으면, 메모해둔 정답을 리턴한다.
    if (memo[n] !== undefined) return memo[n];
    // 새롭게 풀어야하는 경우, 문제를 풀고 새로 만들어서 메모해둔다.
    memo[n] = aux(n - 1) + aux(n - 2);
    return memo[n];
  };
  return aux(n); // 한번 계산된 메모리를 사용해서 풀이한다.
};
