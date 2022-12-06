//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(n){
    // base case
    if(!n) return 1;
    
    // recursive case
    return n * factorial(n-1);
   
}
