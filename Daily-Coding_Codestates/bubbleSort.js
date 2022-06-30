const swap = function (idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
};

// naive solution
// let bubbleSort = function (arr) {
//   let N = arr.length;

//   for (let i = 0; i < N - 1; i++) {
//     // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
//     // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.
//     for (let j = 0; j < N - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(j, j + 1, arr);
//       }
//     }
//   }

//   return arr;
// };

// optimized solution(reference)
let bubbleSort = function (arr) {
  let N = arr.length;

  for (let i = 0; i < N; i++) {
    // swap 횟수를 기록한다.
    // 어떤 요소도 swap되지 않은 경우, 배열은 정렬된 상태이다.
    let swaps = 0;

    // 매 반복(iteration)마다 i번째로 큰 수가 마지막에서 i번째 위치하게 된다.
    // 이미 정렬된 요소는 고려할 필요가 없으므로, 'j < N - 1 - i'만 비교하면 된다.(왜? 아래 if문의 조건에 해당이 되는 요소가 없으니까 반복문은 그대로 통과)
    for (let j = 0; j < N - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps++;
        swap(j, j + 1, arr); // 두 변수를 바꿈으로써 정렬 순서를 바꾸기
      }
    }

    if (swaps === 0) {
      break; // 어떤 요소도 swap되지 않은 경우, 배열은 정렬된 상태이다.
    }
  }

  return arr;
};

// ------------------------------------------------------------------------------------
// reference와 여러 해설 자료 및 강의를 보고 내가 완벽하게 이해한 내용
const swaps = function (idx1, idx2, arr) {
  // 배열은 '메모리 주소'인 배열에 대한 '참조값'이 저장되어 있기 때문에, 아래와 같이 구조분해할당이 가능하다. 
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; 
  // 리턴을 하면 배열의 요소가 값이 리턴되기 때문에 하지 않는다.
  // 본 함수를 통해서 output을 리턴할 필요없이 배열 요소들의 자리만 바꿔줘야 한다.
}

function bubbleSort(arr) {
  let swap = 0; // 배열의 요소들이 교환되는 횟수를 카운팅하기 위해 사용한다.
  // ex) [3, 6, 1, 8, 7, 2, 9, 5, 4, 0]
  for (let i = 0; i < arr.length - 1; i++) { 
  // 왜 -1을 하나? -> 마지막 요소는 크기를 비교할 대상(다음 요소)이(가) 없기 때문에 마지막 이전 요소와 마지막 요소의 비교로 끝난다.
  // 즉, 첫번째 순회(i=0) 시, 배열의 요소 중 가장 큰 요소(숫자)가 제일 마지막에 위치하게 된다(이미 요소 하나하나 비교하면서 올라왔기 때문에).
    for (let j = 0; j < arr.length - 1 - i; j++) { // 각 두 수를 비교하기 위해 사용한다.
    // 왜 - i를 하나? -> 첫번째 순회(i=0)중이라고 생각해보자.
    // 배열의 가장 큰 요소는 이미 제일 마지막에 위치했기 때문에 마지막 요소(가장 큰 숫자)는 비교할 필요가 없게 된다.
    // 즉, 마지막 요소 이전(arr.length-1-i)까지만 비교하면서 올라오면 된다.
      if (arr[j] > arr[j + 1]) { // 만약 앞 요소가 다음 요소보다 크다면, 위치를 바꾼다.
        swap++; // 위치를 바꾼 횟수를 카운트한다.
        swaps(j, j + 1, arr); // 위치를 바꾼다.
      }
      // 두 요소가 크기 순서대로라면 그대로 두고 그 다음 반복을 시작한다.
    }
    if (swap === 0) { 
    // 실컷 순회(반복)하면서 각 요소의 크기를 확인해봤는데도 위치를 바꾼적이 없다면(즉, 요소가 크기 순서대로 정렬되어 있다면),
      break; // 전체 반복을 끝낸다.
    }
  }
  return arr; // 배열의 모든 요소가 크기 순서대로 정렬되어 있는 배열을 리턴한다.
}
