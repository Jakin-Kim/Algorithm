function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  
  let arr = str.split(' ');

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > 0) { // 포인트1: 빈 문자열이 아닌 문자들을 걸러내기
    // 포인트2: 배열을 순회하고 있는 각 문자열의 첫 글자를 대문자로 만들어서 재할당하기
    // 각 문자열의 첫글자를 대문자로 만드는 것('arr[i][0].toUpperCase() + arr[i].slice(1)')까지는 생각했는데 
    // 'arr[i]'형식으로 재할당하는 것을 생각하지 못했다.
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }

  str = arr.join(' ');
  return str;
}
