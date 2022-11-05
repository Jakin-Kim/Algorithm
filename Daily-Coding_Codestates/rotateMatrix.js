// const rotateMatrix = function (matrix) {
//   const N = matrix.length;
//   const M = matrix[0] && matrix[0].length;
//   let output = [];

//   for (let row = 0; row < M; row++) {
//     output[row] = [];
//     for (let col = 0; col < N; col++) {
//       output[row][col] = matrix[N - col - 1][row];
//     }
//   }

//   return output;
// };

// [ matrix[3][0], matrix[2][0], matrix[1][0], matrix[0][0] ] -> [ output[0][0], output[0][1], output[0][2], output[0][3] ],
// [ matrix[3][1], matrix[2][1], matrix[1][1], matrix[0][1] ] -> [ output[1][0], output[1][1], output[1][2], output[1][3] ],
// [ matrix[3][2], matrix[2][2], matrix[1][2], matrix[0][2] ] -> [ output[2][0], output[2][1], output[2][2], output[2][3] ],
// [ matrix[3][3], matrix[2][3], matrix[1][3], matrix[0][3] ] -> [ output[3][0], output[3][1], output[3][2], output[3][3] ],

const rotateMatrix = function (matrix, rotateNum = 1) {
  // rotateNum 이 0일 수도(회전을 하지 않을 수도) 있으므로 아래와 같은 초기화는 지양해야 함
  // rotateNum = rotateNum || 1
  const N = matrix.length;
  // 빈 배열을 입력받을 수도 있기 때문에 && 사용한 조건문 활용.
  const M = matrix[0] && matrix[0].length;

  rotateNum = rotateNum % 4; // 4면체이기 때문에 4번 돌면 원래 상태로 되돌아온다.
  // 회전하지 않는다.
  if (rotateNum === 0) return matrix;

  const rotated = [];
  // 홀수번 회전 시 M x N, 짝수번 회전 시 N x M
  const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    rotated[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      if (rotateNum === 1) rotated[row][col] = matrix[N - col - 1][row]; // 홀수번 회전 시
      if (rotateNum === 2) rotated[row][col] = matrix[N - row - 1][M - col - 1]; // 짝수번 회전 시
      else rotated[row][col] = matrix[col][M - row - 1]; // rotateNum === 3인 경우까지 밖에 없음.
    }
  }

  return rotated;
};

