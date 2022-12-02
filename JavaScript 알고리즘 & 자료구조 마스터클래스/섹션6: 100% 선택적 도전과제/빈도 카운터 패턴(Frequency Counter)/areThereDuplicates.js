function areThereDuplicates(...args) {
  let arr = [];
  for(let arg of args) arr.push(arg);
  
  let argsCount = {};
  for(let ele of arr) {
    let stringifiedEle = String(ele);
    if(!argsCount[stringifiedEle]) argsCount[stringifiedEle] = 1;
    else argsCount[stringifiedEle]++;
  }
  
  for(let key in argsCount) {
    if(argsCount[key] === 1) {
        continue;
    } else {
        return true;
    }
  }
  return false;
}
