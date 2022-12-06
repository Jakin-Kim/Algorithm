// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
  
  let first = str[0];
  let last = str[str.length - 1];
  
  // base case
  if(!str.length) return true;
  
  if(first === last) {
    // recursive case
    return isPalindrome(str.slice(1, str.length - 1));
  } else {
    return false;
  }
}
