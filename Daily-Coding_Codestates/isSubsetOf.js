const isSubsetOf = function (base, sample) { // sample이 base의 부분집합인지 여부를 리턴
  // base = [10, 99, 123, 7] -> [7, 10, 99, 123]
  // sample = [11, 100, 99, 123] -> [11, 99, 100, 123]
 
  // 모든 요소를 순회하므로 실행 시간 초과! -> 선형 알고리즘(내가 접근했던 방식)
  // let count = 0;
  // for (let i = 0; i < base.length; i++) {
  //   for (let j = 0; j < sample.length; j++) {
  //     if (base[i] === sample[j]) { // sample의 요소가 base의 요소에 있다면
  //       count += 1; // 한번씩 카운팅하기
  //     }
  //   }
  // }
  // return count === sample.length; 

  // naive solution: O(M * N)
  // 모든 요소를 순회하므로 실행 시간 초과! -> 선형 알고리즘
  // return sample.every((ele) => base.includes(ele)) -> 선형 알고리즘
  // every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트하며, boolean을 반환한다.

  // 각 배열을 정렬: O(N * logN), O(M * logM)
  // N >= M 이므로, O(N * logN)
  base.sort((a, b) => a - b); // 기존 배열의 요소가 정렬된 상태로 변경되어 있다.
  sample.sort((a, b) => a - b); // 기존 배열의 요소가 정렬된 상태로 변경되어 있다.
  // sort()메서드는 기존 함수를 변경시켜서 문자열의 유니코드 코드 포인트를 따른다.
    // a > b이면, b가 먼저 온다(작은 수(b)부터 오름차순으로 정렬시킨다).
    // a === b이면, 서로 변경하지 않고, 모든 다른 요소에 대해서 정렬시킨다.
    // a < b이면, a가 먼저 온다(작은 수(a)부터 오름차순으로 정렬시킨다).

  // 이 함수를 왜 만들어주는거지? -> 이진 검색을 통해 시간복잡도를 효율적으로 하기 위해서
  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i; // 찾고자 하는 요소(item)가 정렬된 배열(arr)에 있으면, 해당 요소의 인덱스 값을 리턴
      else if (item < arr[i]) return -1; // 
    }
    return -1; // 찾고자 하는 요소(item)가 정렬된 배열(arr)에 없으면, -1을 리턴 
  };

  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    // sample의 각 요소를 순회하면서 정렬된 base의 요소와 일치하는지 확인하기
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx); 
    if (baseIdx === -1) return false; // sample의 요소가 하나라도 base의 요소로 없다면 false이다.
  }
  return true;
};
