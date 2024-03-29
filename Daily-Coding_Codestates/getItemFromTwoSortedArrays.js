const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  // TODO: 여기에 코드를 작성합니다.
  //   naive solution - O(N)
  let count = 1; // 크기가 작은 순서대로 target이 교체될 때마다 카운팅(비교하는 횟수 카운팅)
  let idxOfArr1 = 0; // 두 배열(arr1과 arr2)의 인덱스로 크기가 작은 순서대로 하나씩 비교하기 위해
  let idxOfArr2 = 0; // 두 배열(arr1과 arr2)의 인덱스로 크기가 작은 순서대로 하나씩 비교하기 위해

  let target; // 두 배열의 각 요소를 비교하고 반복문을 통해 작은 값들을 하나씩 지정하면서 올라갈 예정
  while(count <= k) { // k번째까지 도달할때까지 반복해서 크기 비교하기
    if(arr1[idxOfArr1] < arr2[idxOfArr2]) { // 각 배열의 요소들의 크기 비교(왜? 크기가 작은 순서대로 target을 교체하기 위해)
      target = arr1[idxOfArr1];
      idxOfArr1++;
    } else { // 각 배열의 요소들의 크기 비교(왜? 크기가 작은 순서대로 target을 교체하기 위해)
      target = arr2[idxOfArr2];
      idxOfArr2++;
    }
    count++; // 작은 수부터 차례대로 비교하면서 하나씩 올라가는 과정을 카운팅하기
  }
  return target;    
};


// 위 naive soulution을 이해하고 보기
  // O(logK) solution
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {

  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.
    let cnt = Math.ceil(k / 2);
    let leftStep = cnt,
      rightStep = cnt;

    // 엣지 케이스
    // 카운트가 남았음에도 배열의 끝에 도달하면 k를 나머지 배열쪽으로 넘긴다.
    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    // 엣지 케이스
    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우, leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

    // 두 배열의 현재 검사 요소 위치를 비교해서, 그 값이 작은 배열은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      // 처리가 끝나면 k값을 절반으로 떨어뜨린다.
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};
