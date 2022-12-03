function isSubsequence(str1, str2) {
  let newStr = '';
  let str1Start = 0;
  let str2Start = 0;
  
  while(str2Start < str2.length) {
    if(str1[str1Start] === str2[str2Start]) {
        newStr += str2[str2Start]
        str1Start++;
        str2Start++;
    } else {
        str2Start++;
    }
  }
  
  if(newStr === str1) {
    return true
  } else {
    return false;
  }
}
