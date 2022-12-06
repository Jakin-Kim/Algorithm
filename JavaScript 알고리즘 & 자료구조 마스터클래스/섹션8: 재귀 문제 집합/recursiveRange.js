// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(n){
   // base case
   if(!n) return 0;
   
   // recursive case
   return n + recursiveRange(n-1);
}
