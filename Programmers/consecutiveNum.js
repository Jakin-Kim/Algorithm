function consecutiveNum(num, total) {
    let answer = [];
    let idx = [];
    let result = [];
    // 1. num 갯수만큼 배열에 'x'와 index 넣기
    for(let i = 0; i < num; i++) {
        answer.push('x');
        idx.push(i); // +1씩 증가되는 요소들의 합을 구하기 위함
    }
    // 2. total을 answer.length로 나누기
    let x = (total - idx.reduce((acc,cur) => acc + cur)) / answer.length;
    
    // 3. x에서 +1씩 증가하는 수를 배열의 요소로 넣기
    for(let i = 0; i < num; i++) {
        result.push(x);
        x++
    }
    return result;
}
