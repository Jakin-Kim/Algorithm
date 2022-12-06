// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
    // base case
    if(!exponent) return 1;
    
    // recursive case
    return base * power(base, exponent - 1);
}
