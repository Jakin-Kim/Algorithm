function linearSearch(arr, k){
  if(!arr.length) return -1;
  
  let result = {};
  for(let i = 0; i < arr.length; i++) {
    if(!result[arr[i]]) {
        result[arr[i]] = i;
    }
  }
  
  if(String(k) in result) {
      return result[String(k)];
  } else {
      return -1;
  }
}
