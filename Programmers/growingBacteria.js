function growingBacteria(n, t) {
    var answer = 0;
    answer = n;
    for(let i = 1; i <= t; i++) {
        answer *= 2;
    }
    return answer;
}
