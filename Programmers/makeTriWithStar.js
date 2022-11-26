// 문제설명
// 이 문제에는 표준 입력으로 정수 n이 주어집니다.
// 별(*) 문자를 이용해 높이가 n인 삼각형을 출력해보세요.

// 제한조건
// n은 100이하인 자연수입니다.

// 입출력 예시
// 입력: 3
// 출력
  // *
  // **
  // ***

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // console.log(line)
    input = line.split(' ');
}).on('close', function () {
    let newNum = Number(input[0]);
    
    let str = '';
    let result = [];

    for(let i = 0; i < newNum; i++) {
        str = str.concat('*');
        result.push(str);
    }

    result.map(star => console.log(star));
});
