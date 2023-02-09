function coke(a, b, n) {
    let coke = n;
    let exchanged = 0;
    
    while(coke >= a){
        const quotient = Math.floor(coke / a);
        
        coke = coke - (quotient * a) + (quotient * b);

        exchanged += quotient * b;
    }
    
    return exchanged;
}
