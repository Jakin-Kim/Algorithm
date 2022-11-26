// 문제 설명
// 정수 n이 주어질 때, 1부터 n까지의 정수를 순서대로 담은 배열을 리턴하도록 fullNumber 함수를 작성했습니다.
// 이때, 코드가 올바르게 동작할 수 있도록 빈칸을 알맞게 채워주세요.

// 매개변수 설명
// 1. 정수 n이 solution 함수의 매개변수로 주어집니다.
// 2. n은 1이상 100,000이하의 정수입니다.

// return 값 설명
// fullNumber 함수는 1부터 n까지의 정수를 순서대로 담은 배열을 리턴합니다.

// 입출력 예시
// n: 3 / return: [1,2,3]
// n: 5 / return: [1,2,3,4,5]

function fullNumber(n) {
    var answer = [];
    for(var i=0; i<n; i++)
      answer.push(i+1); // 빈 칸으로 되어있었다.
    return answer;
}
