function solution(n) {
    var answer = 0;
    let evenNum = 0;
    
    for(let i = 1; i <= n; i++) {
        const isEvenNum = i % 2 === 0
        if(isEvenNum) {
            answer += i
        }
    }
    
    return answer;
}
