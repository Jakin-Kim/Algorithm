// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
  // add whatever parameters you deem necessary - good luck!  
  
  // base case
  if(n <= 2 && n > 0) return 1;
  
//   fib(4) = fib(3) + fib(2)
//           fib(3) = fib(2) + fib(1)
//                     fib(2) = 1
  
  // recursive case
  return fib(n-1) + fib(n-2);
}
