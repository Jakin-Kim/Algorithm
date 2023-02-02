function select(arr, obj) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 배열과 객체
  // 출력값: 배열(arr)의 각 요소들을 객체(obj)의 키로 했을 때
          // 그 값을 추출하여 '새로운 객체' 리턴
  
  // 1. 배열의 각 요소와 객체의 키가 일치한지 여부 -> if문
    // 1-1. 객체의 키를 하나씩 순회하면서 배열의 요소들과 하나씩 매칭 -> Object.keys(obj)
  // 2. 매칭되는 배열의 요소들만 '새로운 배열'에 저장
  // 3. '새로운 배열'의 요소를 키 값으로 하는 객체와 기존 객체(obj)를 비교?

  let result = {};
  // let newArr = Object.keys(obj); // obj의 키 값을 담은 배열
  // let processingArr = [];

  for (let keys in obj) {
    for (let i = 0; i < arr.length; i++) {
     // arr.length까지만 해도 arr[i] 모두 훑을 수 있기 때문에 괜찮음
      if(keys === arr[i]) { // 하나씩 훑은 객체(obj)의 키와 배열의 요소가 일치하는지 여부파악
      result[keys] = obj[keys];
      // arr 요소와 obj의 키가 일치하는 프로퍼티를 새로운 객체친구(result)에 추가해서 만들어줌
      // 왜? 입력받은 객체를 수정하지 않아야 하니까.
      }
    }
  }
  return result;
}
