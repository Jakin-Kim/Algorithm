const powerSet = function (str) { // ex) 'abcab'

  // 1. 들어온 문자열을 사전식으로 정렬한다. ex) ['a', 'a', 'b', 'b', 'c'] 
  const sorted = str.split('').sort(); 

  // 2. 중복되는 문자를 제거한다. ex) ex) ['a', 'b', 'c'] 
  const newArr = [sorted[0]];
  let last = sorted[0];
  for(let i = 1; i < sorted.length; i++) {
    if(last === sorted[i]) { // 중복된 문자가 있다면, 
      last = sorted[i]; // 현재 반복 중인 문자(last)로 교체만하고 newArr에는 넣지 않는다.
    } else { // 중복된 문자가 없다면,
      newArr.push(sorted[i]); // 중복되지 않은 문자는 newArr에 넣고
      last = sorted[i] // 현재 반복 중인 문자(last)로 교체한다.
    }
  }

  // 3. 위 결과로 만들어진 데이터를 이용해 모든 부분집합을 리턴한다.
  let result = [];
    // 아래 함수는 경우의 수를 다루거나, 깊이 우선 탐색(BFS)을 하는 경우에 자주 사용되는 형태이다.
  function pickOrNot(idx, subset) { 
    // idx: 초기값은 0이며, newArr의 각 인덱스에 접근하는 역할을 한다.
    // subset: 초기값은 빈 문자열이며, 재귀함수로 순회할 때마다 부분집합의 형태를 저장해주는 역할을 한다.

    // base case
    if (idx === newArr.length) {
      result.push(subset);
      return
    }

    let selected = newArr[idx];

    // 현재 순회하고 있는 요소(selected)가 부분집합(문자열)에 포함되지 않은 경우,
    pickOrNot(idx + 1, subset);

    // 현재 순회하고 있는 요소(selected)가 부분집합(문자열)에 포함되는 경우,
    pickOrNot(idx + 1, subset + selected);
  }

  pickOrNot(0, "");
  return result.sort(); // 사전식 순서(lexical order)로 정렬한다.
};
