function newChickenRecipe(stuffArr, choiceNum) {
  // TODO: 여기에 코드를 작성하세요.
  // 입력값(stuffArr): (0과 1의)재료를 담은 배열 -> 0 <= stuffArr <= 10 / stuffArr.length <= 20
  // 입력값(choiceNum): 재료를 선택할 수 있는 수
  // 출력값: 사용 가능한 재료 중 조합할 수 있는 모든 경우를 담은 배열

  // 1. stuffArr에서 0이 3개 이상 들어가는 재료가 있는지 확인 후, 이를 제외한 새로운 배열 반환하기(단, 크기 순서로 오름차순 되어야 함)
  const realStuffArr = [];
    // 1-1. 모든 요소를 문자열로 만들기
  for(let i = 0; i < stuffArr.length; i++) { // stuffArr[i]는 숫자형이기 때문에 그대로 넣기
    const ele = String(stuffArr[i]).split('').filter(ele => ele === '0');
    if(ele.length <= 2) { // 0이 두개 이하로 들어가는 요소만 필터링
      realStuffArr.push(stuffArr[i]);
    }
  }
    // 1-2. 오름차순 정렬하기
    realStuffArr.sort((a, b) => a - b);

  // 2. 주어진 재료를 모두 사용할 수 없거나, 사용 가능한 재료가 choiceNum보다 작다면 빈 배열 반환하기
  if(!realStuffArr.length || realStuffArr.length < choiceNum) return [];

  // 3. 1에서 만든 새로운 배열(사용 가능한 재료를 담은 배열)에서 choiceNum만큼 고른 경우의 수 구하기
    // 3-1. 전체 경우의 수를 담을 배열 만들기
  const result = [];
    // 3-2. 순열 재귀함수 만들기(사용 가능한 재료가 담긴 배열, 각 경우를 담은 내부 배열, 선택횟수)
  const permutation = (arr, bucket, num) => {
    // 탈출조건
    if(!num) {
      result.push(bucket);
      return;
    }

    for(let i = 0; i < arr.length; i++) {
      let newArr = arr.slice(); // 원본 배열 복사
      newArr.splice(i, 1); // 해당 인덱스만 자른 배열
      permutation(newArr, bucket.concat(arr[i]), num - 1);
    }
    
  }
  // 순열 재귀함수 실행(왜? newChickenRecipe의 인자를 사용해서 반환해야 하기 때문에)
  permutation(realStuffArr, [], choiceNum);

  return result;
}
