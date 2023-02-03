function my_str(my_str, n) {
    var answer = [];
    while(my_str.length > 0) {
        let split = my_str.slice(0,n);
        answer.push(split);
        my_str = my_str.slice(n);
    }
    return answer;
}
