function removeExtremes(arr) {
  // TODO: 여기에 코드를 작성합니다.

  // 입력값: 문자열을 요소로 갖는 배열
  // 출력값: 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열

  // 1. 배열 내 요소인 문자열의 길이가 '가장 짧은 문자열'과 '가장 긴 문자열'을 찾기 위해(기준을 만들기 위해) 각 고정값 선언 및 할당
  let shortestLen = 20; // 작은 문자열이 나올 때마다 할당 값을 바꿔주기 위해 '가장 긴 문자열' 길이를 기준으로 할당
  let longestLen = 0; // 작은 문자열이 나올 때마다 할당 값을 바꿔주기 위해 '가장 짧은 문자열' 길이를 기준으로 할당

  // 2. 새로운 배열을 리턴할때 '가장 짧은 문자열'과 '가장 긴 문자열' 요소의 인덱스를 지정하기 위해서 초기값 0으로 선언 및 할당
  let shortestIdx = 0;
  let longestIdx = 0;

  // 3. 배열의 각 요소를 하나씩 순회하기
  for (let i = 0; i < arr.length; i++) { 
  // 4. 각 요소(문자열)순회하면서 문자열의 길이가 '가장 긴 문자열'이 나오면 재할당하기
    if (arr[i].length >= longestLen) {
      longestLen = arr[i].length;
      longestIdx = i; // 나중에 '가장 긴 문자열'의 인덱스만 제외한 배열을 리턴하기 위해서 재할당해줌
    }
  // 5. 각 요소(문자열)순회하면서 문자열의 길이가 '가장 짧은 문자열'이 나오면 재할당하기
    if (arr[i].length <= shortestLen) {
      shortestLen = arr[i].length;
      shortestIdx = i; // 나중에 '가장 짧은 문자열'의 인덱스만 제외한 배열을 리턴하기 위해서 재할당해줌
    }
  }
  // 6. 리턴할 새로운 배열 만들기
  let result = [];
  // 7. 새로운 배열을 리턴하기 위해서 다시 기존 배열(arr)의 각 요소를 순회하기
  for (let i = 0; i < arr.length; i++) {
  // 8. 각 요소(문자열)를 순회하면서 '가장 짧은 문자열'과 '가장 긴 문자열' 요소의 인덱스를 제외한 값만 추가하기
    if (i !== shortestIdx && i !== longestIdx) {
      result.push(arr[i]); // 해당 조건이 제외된 값만 추가하기
    }
  }
  // 9. '가장 짧은 문자열'과 '가장 긴 문자열'을 제외하고 새로 만들어진 배열을 리턴하기
  return result;
}


