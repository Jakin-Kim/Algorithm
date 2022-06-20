function getOnlyAllowedToDrink(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 객체를 요소로 갖는 배열
  // 출력값: 18세 이상인 사람의 이름을 요소로 갖는 배열

  // age가 18세 이상인 사람들의 이름을 골라내는 함수(배열)를 만들기
  const peopleAbove18 = arr.map(function(people){
    if(people.age >= 18) {
      return people.name;
    }
  });

  // 위에서 만든 함수(배열)의 요소(이름)가 undefined이면,
  // 삭제하고 그 요소를 반환
  return peopleAbove18.filter(function(name){
    return name !== undefined;
  });

}
