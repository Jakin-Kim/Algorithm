function getIndex(arr, num) {
  // TODO: 여기에 코드를 작성합니다.

  // 입력값: 정수를 요소로 갖는 배열과 정수(num)
  // 출력값: num을 추가하고 배열의 정수들을 정렬했을때 그 수의 인덱스 값을 리턴

// arr.filter를 어떻게 사용할 수 있을까?
  // 0. 새로운 빈 배열 만들기
  // 1. arr에 num 요소 추가하기
  // 2. arr의 요소들을 오름차순으로 정렬하기 -> 새로 정렬된 배열을 만들기
    // 2-1. 첫째 요소와 둘째 요소의 크기를 비교해서 작은 값을 먼저 하나씩 쌓기
    // 2-2. 새로 정렬된 배열에서 num이 몇번째에 있는지 확인하기
  
  let result = arr.filter(el => {
    if(el < num) {
      arr.push(num);
    } else {
      arr.unshift(num);
    }
  });

  return result;
}
