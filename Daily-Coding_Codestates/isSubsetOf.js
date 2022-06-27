let swaps = function (idx1, idx2, arr) {
  // 배열의 요소의 순서를 변경하는 함수
  // 배열은 원본 배열을 가리키는 참조 값만 할당되기 때문에 이런식으로 구조 분해 할당을 사용할 수 있다.
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
}

const bubbleSort = function (arr) {
  // 배열의 모든 요소를 오름차순하여 새로 정렬된 함수
  let swap = 0; // swaps 함수가 실행되서 배열이 바뀌는 횟수 기록하기
  for (let i = 0; arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      swaps(arr[i], arr[i + 1], arr);
      swap++;
    }
  }

  if (swap === 0) {
    return arr;
  }

  return arr;
}

const isSubsetOf = function (base, sample) {
  // TODO: 여기에 코드를 작성합니다.

  // 모든 요소를 순회하므로 실행 시간 초과!
  // let count = 0;
  // for (let i = 0; i < base.length; i++) {
  //   for (let j = 0; j < sample.length; j++) {
  //     if (base[i] === sample[j]) { // sample의 요소가 base의 요소에 있다면
  //       count += 1; // 한번씩 카운팅하기
  //     }
  //   }
  // }
  // return count === sample.length; 

  // 모든 요소를 순회하므로 실행 시간 초과!
  // return sample.every((ele) => base.includes(ele))

  // 이중반복문을 사용하더라도 시간복잡도를 고려하기
  // 1. 먼저 두 배열(base와 sample)의 모든 요소를 오름차순으로 정리한 배열을 만들기
  // 2. 이중반복문을 사용하여 두 배열의 모든 요소를 순회하다가 겹치는 요소를 발견하면 
      // base의 요소 반복 시, 그 다음 반복 실행하기
};
