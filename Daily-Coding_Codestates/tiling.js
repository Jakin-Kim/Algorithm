let tiling = function (n) {
  // 세로 길이 2, 가로 길이 n인 2 x n 보드가 있다.
  // 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 한다.

  // 만약 n === 1 이라면(각 타일을 a, b, c, d, ...로 구분한다면),
  // 2 x 1인 보드를 채우는 경우의 수는 1가지이다 => 1
    // 2 | a
    // 1 | a
  
  // 만약 n === 2 이라면(각 타일을 a, b, c, d, ...로 구분한다면),
  // 2 x 2인 보드를 채우는 경우의 수는 2가지이다 => 2
    // 2 | a b
    // 1 | a b
    // -------
    // 2 | a a
    // 1 | b b

  // 만약 n === 3 이라면(각 타일을 a, b, c, d, ...로 구분한다면),
  // 2 x 3인 보드를 채우는 경우의 수는 3가지이다 => 3
    // 2 | a b c
    // 1 | a b c
    // ---------
    // 2 | a b b
    // 1 | a c c
    // ---------
    // 2 | a a c
    // 1 | b b c
  
  // 만약 n === 4 라면, 경우의 수는 5가지 (문제의 예시에 따라)
  // 만약 n === 5 라면, 경우의 수는 8가지 (직접 구현해봄)...
  // 해당 경우의 수는 반복적인 규칙을 보인다.
  // 즉, 2 x n 타일의 경우의 수는 '2 x (n-1)' 타일의 경우의 수와 '2 x (n-2)' 타일의 경우의 수를 합한 것과 같다.

  // 하지만 아래와 같이 재귀적으로 풀이를 하면 모든 경우 반복적으로 시행하므로 시간복잡도가 증가(실행시간을 초과)한다.
  // base case
  // if (n <= 2) return n;
  // recursive case
  // return tiling(n - 1) + tiling(n - 2);  

  // with memoization
  // 보다 효율적인 코드를 위해서 이미 실행한 결과를 메모리에 저장한다.
  // 실행한 결과를 메모리에 저장해줌으로써 동일한 작업을 반복하지 않도록 해주며 코드의 효율성이 증가(시간복잡도가 감소)한다.
  const memo = [0, 1, 2]; // base case를 미리 저장해놓고 메모리에 저장할 보조함수를 만든다.
  const aux = (size) => { // 메모리에 저장할 보조함수를 재귀적으로 만들기
    if (memo[size] !== undefined) { // 이미 메모리에 있는 값이라면,
      // 이미 해결한 문제니까 더 이상 쪼개지 않고 이미 메모리에 저장된 값을 사용한다.
      return memo[size];
    }
    if (size <= 2) { // 메모리에 있는 값이라면, 바로 사용한다.
      return memo[n];
    }
    // 이전 경우의 수와 이전보다 이전 경우의 수를 더하는 방식(위에서 접근한 문제풀이 방식)으로 재귀적으로 해결한다.
    // 새롭게 풀어야하는 경우, 문제를 풀고 메모해둔다.
    memo[size] = aux(size - 1) + aux(size - 2); 
    return memo[size];
  };
  return aux(n);
};

// dynamic with tabulation: O(N)
// tabulation은 데이터를 테이블에 정리하면서 bottom-up 방식으로 해결하는 기법을 말합니다.
// let tiling = function (n) {
//   const memo = [0, 1, 2];
//   if (n <= 2) return memo[n];
//   for (let size = 3; size <= n; size++) {
//     memo[size] = memo[size - 1] + memo[size - 2];
//   }
//   return memo[n];
// };

// dynamic with slicing window: O(N)
// slicing window은 필요한 최소한의 데이터만을 활용하는 것을 말합니다.
// 크기 n의 문제에 대한 해결을 위해 필요한 데이터는 오직 2개뿐이라는 사실을 이용합니다.
// let tiling = function (n) {
//   let fst = 1,
//     snd = 2;
//   if (n <= 2) return n;
//   for (let size = 3; size <= n; size++) {
//     // 앞의 두 수를 더해 다음 수를 구할 수 있다.
//     const next = fst + snd;
//     // 다음 문제로 넘어가기 위해 필요한 2개의 데이터의 순서를 정리한다.
//     fst = snd;
//     snd = next;
//   }
//   return snd;
// };
