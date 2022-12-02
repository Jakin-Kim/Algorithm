function sameFrequency(num1, num2){
  let stringifiedNum1 = String(num1);
  let stringifiedNum2 = String(num2);

  if(stringifiedNum1.length !== stringifiedNum2.length) return false;
  
  let objOfNum1 = {};
  let objOfNum2 = {};
  
  for(let eachNum of stringifiedNum1) {
    if(!objOfNum1[eachNum]) objOfNum1[eachNum] = 1;
    else objOfNum1[eachNum] += 1;
  }

  
  for(let eachNum of stringifiedNum2) { 
    if(!objOfNum2[eachNum]) objOfNum2[eachNum] = 1;
    else objOfNum2[eachNum] += 1;
  }
    
  for(let key in objOfNum1) {
    if(key in objOfNum2 && objOfNum1[key] === objOfNum2[key]) return true;
    else return false;
  }
}
