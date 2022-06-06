function createPhoneNumber(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 입력값: 숫자를 요소로 갖는 배열
    // 출력값: 전화번호 형식의 문자열
    // ex) [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
      // 출력값: '(010)-1234-5678'
    // 경우의 수가 나눠져 있기 때문에 -> 8자리, 11자리
    // 11자리가 일반적인 입력값이라고 생각하고, 11자리인 경우를 해결하고
    // 조건문으로 8자리인 경우를 따로 해결하기.
  
    // (1) 11자리 숫자가 들어왔을 경우
    let head = arr.slice(0, 3).join(''); // [0, 1, 0] -> 문자열로 바꾸고 싶다. -> join() ->
    let body = arr.slice(3, 7).join('');
    let tail = arr.slice(7, 11).join('');
  
    // 8자리인 경우는 010이 빠져있기 때문에 010(head)만 추가해주면 된다.
    if (arr.length === 8) {
     head = '010'; 
     body = arr.slice(0, 4).join('');
     tail = arr.slice(4, 8).join('');
    }
    //Template Literal 사용하기
    return `(${head})${body}-${tail}`;  
  }
  