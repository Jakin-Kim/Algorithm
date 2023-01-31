function reverseNum(n) {
    var answer = [];
    let stringifiedN = String(n);
    for(let i = stringifiedN.length - 1; i >= 0; i--) {
        answer.push(Number(stringifiedN[i]));
    }
    return answer;
}
