function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: key의 해당하는 값이 배열인 객체
  // 출력값: key의 해당하는 값을 제곱한 새로운 배열

  if(obj[property] === undefined || !(Array.isArray(obj[property]))) {
    return [];
  }

  return obj[property].map(function(num){
    // obj[property]에 배열이 할당되고
    // .map() 메서드 안에 있는 함수가 배열의 요소에 하나씩 적용된다.
    // function(num){}에서 'num'은 배열의 요소가 된다.
    return square(num);
  });
}
