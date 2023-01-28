function missHouseMeal(sideDishes) {

  // 결과를 담을 배열을 선언합니다.
  let result = [];
  // sideDishes를 사전식 순서로 정렬합니다.
  sideDishes.sort();

  // 모든 조합을 검사하는 재귀 함수를 작성합니다.
  const sidePowerSet = (idx, sideDish) => {

    // 재귀 함수이기 때문에 탈출 조건을 만듭니다.
    if (idx === sideDishes.length) {
      // 만약, idx와 sideDishes의 길이가 같다면(마지막까지 검토한 경우) result에 sideDish를 삽입하고 push합니다.
      result.push(sideDish);
      return;
    }

    // idx번째 요소가 포함되지 않는 경우
    sidePowerSet(idx + 1, sideDish);

    // idx번째 요소가 포함되는 경우
    sidePowerSet(idx + 1, [...sideDish, sideDishes[idx]]);
  };

  // 0 번째 인덱스와 빈 배열을 인자로 받는 재귀 함수를 실행합니다.
  sidePowerSet(0, []);

  // 결과를 사전식 순서로 정렬합니다.
  return result.sort();
}
