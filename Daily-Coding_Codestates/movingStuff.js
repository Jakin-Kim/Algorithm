function movingStuff(stuff, limit) {
  // 입력값: 각 이삿짐의 무게가 담긴 배열(stuff)
  // 출력값: 각 이삿짐을 옮길 수 있는 박스의 무게 제한(limit)

  // 이삿짐 무게가 담긴 배열을 오름차순 정리하기 
    // -> 왜? 가장 작은 이삿짐 무게와 가장 큰 이삿짐 무게의 합을 limit와 비교해보기 위해
  let sortStuff = stuff.sort((a, b) => a - b);

  // 두 이삿집의 합이 limit보다 작을 때 하나씩 더하기
    // -> 왜? 두개를 한번에 이동시켜줄 수 있기 때문에
  let twoStuffCnt = 0;
  let leftIdx = 0; // 가장 작은 값의 인덱스
  let rightIdx = stuff[stuff.length - 1]; // 가장 큰 값의 인덱스

  // 가장 왼쪽 인덱스 요소(가장 작은 이삿짐)와 가장 오른쪽 인덱스 요소(가장 큰 이삿짐)의 크기 비교
  while(leftIdx < rightIdx) {
    // 가장 무거운 이삿짐과 가장 가벼운 이삿짐부터 순차적으로 limit와 크기 비교한다. 
      // -> 왜? limit보다 작으면 두개를 한번에 옮겨줄 수 있으니까!
    if(sortStuff[leftIdx] + sortStuff[rightIdx] <= limit) { 
      leftIdx++;
      rightIdx--;
      twoStuffCnt++; // 두 이삿짐을 한번에 옮긴 횟수 기록하기 -> 왜? 박스를 한번에 하나씩 가져간 횟수에서 빼주려고!
    } else {
      rightIdx--; // 박스에 가장 무거운 이삿짐 하나만 담아서 이동하기
    }
  }
  
  // 박스 하나당 이삿집 하나씩 옮겨준 경우의 수에서 두개를 한번에 옮겨준 경우 빼주기!
  return stuff.length - twoStuffCnt;
}
