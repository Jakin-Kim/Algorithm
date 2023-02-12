function pushString(A, B) {
    let answer = 0;
    
    if(A === B) return 0;
    
    for(let i = 0; i < A.length; i++) {
        A = A.slice(A.length - 1) + A.slice(0, A.length - 1);
        answer++;
        if(A === B) return answer;
    }
    if(A !== B) return -1;
}
