// 1. 마을을 2차원 배열의 형태로 표현한다.
// 2. 처음 소문이 시작되는 곳의 값을 0으로 바꾼다.
// 3. 소문이 퍼진 곳 인근 지점(상,하,좌,우)을(를) 모두 조사한다.
// 4. 그 지점의 값이 '1'이면, 소문을 전파하는 값에 1을 더한 값(+1)으로 바꿔준다.
// 5. 모든 집에 소문이 퍼지면, 가장 높은 숫자를 리턴한다.

const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  let matrix = createMatrix(village); // 1.
  matrix[row][col] = 0; // 2.

  let queue = []; // 너비우선탐색(BFS)구현을 위해 큐(Queue)를 선언한다. 
  queue.push([row, col]); // 각 좌표를 큐에 넣는다.
  
  let count = 0; // 가장 큰 수를 반환하기 위한 카운트를 구현한다.

  // 좌표의 바깥으로 나간다면(즉, undefine라면), 탐색하지 않도록 하기 위한 함수를 만들어준다.
  let isValid = (row, col) => (row >= 0) && (row < matrix.length) && (col >= 0) && (col < matrix[0].length)

  while(queue.length > 0) { // 3.
    let [row, col] = queue.shift();
    if(isValid(row - 1, col) && (matrix[row - 1][col] === '1')) { // 상
      matrix[row - 1][col] =  matrix[row][col] + 1;
      queue.push([row - 1, col]);
    }

    if(isValid(row + 1, col) && (matrix[row + 1][col] === '1')) { // 하
      matrix[row + 1][col] =  matrix[row][col] + 1;
      queue.push([row + 1, col]);
    }

    if(isValid(row, col - 1) && (matrix[row][col - 1] === '1')) { // 좌
      matrix[row][col - 1] =  matrix[row][col] + 1;
      queue.push([row, col - 1]);
    }

    if(isValid(row, col + 1) && (matrix[row][col + 1] === '1')) { // 우
      matrix[row][col + 1] =  matrix[row][col] + 1;
      queue.push([row, col + 1]);
    }
    count = matrix[row][col];
  }
  return count;
};
