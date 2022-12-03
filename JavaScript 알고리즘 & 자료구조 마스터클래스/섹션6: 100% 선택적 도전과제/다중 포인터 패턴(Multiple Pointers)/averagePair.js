function averagePair(arr, average){
  let first = 0;
  let second = 1;
  while(first < arr.length) {
    if(arr[first] + arr[second] === average * 2) {
        return true;
    }
    if(second === arr.length) {
        first++;
        second = first + 1;
        continue;
    }
    second++;
  }
  return false;
}
