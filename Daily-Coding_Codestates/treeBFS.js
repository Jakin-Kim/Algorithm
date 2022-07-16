let bfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력받은 node를 배열에 담기 -> 왜? 배열의 메서드를 사용해서 값을 도출하기 위해서
  let queue = [node];  
  // 각 노드의 값(value)이 담긴 배열을 리턴하기 위해서 빈 배열 생성
  let result = [];

  while(queue.length > 0) { // 배열에 노드가 있다면
    const head = queue[0]; // 최상위 노드만 따로 빼놓기
    // head를 제외한 노드가 담겨있는 새로운 배열을 만들기
    // (처음 반복문 순회할 때는 바로 빈 배열이 됨 -> 왜? 위에서 하나밖에 없는 요소인 head를 잘랐기 때문에)
    queue = queue.slice(1); 

    result.push(head.value); // 리턴할 배열에 노드의 값(value)를 추가해서 차곡차곡 담기

    // 최상위 노드(head)의 프로퍼티 이름인 children에 있는 요소인 노드(n)를 하나씩 순회하면서 다시 queue 배열에 담기
    // 반복문이 끝남과 동시에 while의 조건을 다시 만족하기 때문에 계속 반복되다가 더 이상 노드(n)가 없으면,
    head.children.forEach((n) => queue.push(n)); 

  }
  // 지금까지 담아왔던 각 노드의 값(value)가 담긴 배열(result)를 리턴한다.
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
