function lambSkewer(n, k) {
    var answer = 0;
    let service = Math.floor(n / 10)
    answer = (n * 12000) + (k * 2000);
    
    if(service) {
        answer = answer - (service * 2000);
    }
    return answer;
}
