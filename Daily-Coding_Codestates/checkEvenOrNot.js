function checkEvenOrNot(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 수를 요소로 갖는 배열
  // 출력값: 각 요소(수)가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열
  return arr.map(function(num){
    // 만약 arr[i]가 2의 배수인 경우, 리턴 'ok'
    // arr[i] === 0 이라면 리턴 'no'
    // 아니라면, 리턴 'no'
    if(num === 0 || num % 2 === 1){ // 민우님: 코드를 효율적으로 작성하기 위해 마지막 else의 조건을 합쳤다
      return 'no';
    } else if(num % 2 === 0) { // 여기도 효율적으로 쓸 수 있음. 생각해보기.
      return 'ok';
    } 
  });
}
