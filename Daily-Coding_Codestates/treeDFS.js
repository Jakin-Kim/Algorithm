let dfs = function (node) {
  // TODO: 여기에 코드를 작성합니다.
  // 해당 노드의 값을 배열에 담기(첫 노드라면 첫 노드의 값을 새로운 배열에 담기)
  let result = [node.value];
  // 해당 노드의 자식 노드를 하나씩 순회하기
  node.children.forEach((node) => {
    // 새로운 값이 담긴 배열에서 기존 배열을 새 배열(dfs(node))과 합치기
    // dfs(node)함수를 재귀함수로 사용해서 사용하기
    result = result.concat(dfs(node));
  });

  // 모든 요소들이 깊이 우선 탐색으로 담긴 새로운 배열을 리턴하기
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value; // node.value는 number타입
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) { // 여기서 child는 node이다.
  this.children.push(child);
  return child;
};
