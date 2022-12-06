// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
const isEven = num => num % 2 === 0;
function someRecursive(arr, isEven){
  
  // base case
  if(!arr.length) return false;
  
  if(isEven(arr[0])) return true;
  
  // recursive case
  return someRecursive(arr.slice(1), isEven);
}
