function collatz(num) {

    if (num === 1) return 0;

    for(let i = 1; i <= 500; i++) {
        num % 2 ? num = num * 3 + 1 : num /= 2
        if (num === 1) return i;
    }; 

    return -1;
};
