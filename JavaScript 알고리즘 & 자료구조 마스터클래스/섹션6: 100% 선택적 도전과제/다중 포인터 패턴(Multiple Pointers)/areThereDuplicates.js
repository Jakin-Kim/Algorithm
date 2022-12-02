function areThereDuplicates(...args) {
	let arr = [];
  for(let arg of args) arr.push(arg);
  
  let left = 0;
  let right = arr.length - 1;
  while(left < right) {
    if(arr[left] === arr[right]) {
        return true;
    } else {
        left++;
    }
  }
  return false;
}
