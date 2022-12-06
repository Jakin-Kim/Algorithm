function nestedEvenSum (obj) {
  let evenSum = 0;
  let isEven = function (val) {
    if(!val) return false;
    if(val % 2 === 0) return true;
    else return false;
  };
  
  function loopObj(object) {
    for(let key in object) {
        if(typeof object[key] === 'object') {
            // recursive case
            loopObj(object[key]);
        } else {
            if(isEven(object[key])) {
                evenSum += object[key];
            }
        }
    }
  }
  
  // recursive case
  loopObj(obj);
  
  return evenSum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
