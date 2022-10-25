const rotateMatrix = function (matrix) {
  // TODO: 여기에 코드를 작성합니다.

  // [ matrix[3][0], matrix[2][0], matrix[1][0], matrix[0][0] ]
  // [ matrix[3][1], matrix[2][1], matrix[1][1], matrix[0][1] ]
  // [ matrix[3][2], matrix[2][2], matrix[1][2], matrix[0][2] ]
  // [ matrix[3][3], matrix[2][3], matrix[1][3], matrix[0][3] ]

  const N = matrix.length;
  const M = matrix[0] && matrix[0].length;
  let output = [];

  for (let row = 0; row < M; row++) {
    output[row] = [];
    for (let col = 0; col < N; col++) {
      output[row][col] = matrix[N - col - 1][row];
    }
  }

  return output;    
};
