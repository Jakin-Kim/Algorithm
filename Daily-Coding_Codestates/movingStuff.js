// 문제
// 김코딩과 박해커는 사무실 이사를 위해 짐을 미리 싸 둔 뒤, 짐을 넣을 박스를 사왔다. 
// 박스를 사오고 보니 각 이사짐의 무게는 들쭉날쭉한 반면, 박스는 너무 작아서 한번에 최대 2개의 짐 밖에 넣을 수 없었고 무게 제한도 있었다.
// 예를 들어, 짐의 무게가 [70kg, 50kg, 80kg, 50kg]이고 박스의 무게 제한이 100kg이라면 2번째 짐과 4번째 짐은 같이 넣을 수 있지만 
// 1번째 짐과 3번째 짐의 무게의 합은 150kg이므로 박스의 무게 제한을 초과하여 같이 넣을 수 없다.
// 박스를 최대한 적게 사용하여 모든 짐을 옮기려고 합니다.
// 짐의 무게를 담은 배열 stuff와 박스의 무게 제한 limit가 매개변수로 주어질 때, 
// 모든 짐을 옮기기 위해 필요한 박스 개수의 최소값을 return 하도록 movingStuff 함수를 작성하세요.

// 입력
// 인자 1: stuff
// Number 타입의 40 이상 240 이하의 자연수를 담은 배열
// ex) [70, 50, 80, 50]
// 인자 2: limited
// Number 타입의 40 이상 240 이하의 자연수

// 출력
// Number 타입을 리턴해야 합니다.
// 모든 짐을 옮기기 위해 필요한 박스 개수의 최솟값을 숫자로 반환합니다.

// 주의사항
// 옮겨야 할 짐의 개수는 1개 이상 50,000개 이하입니다.
// 박스의 무게 제한은 항상 짐의 무게 중 최대값보다 크게 주어지므로 짐을 나르지 못하는 경우는 없습니다.

// 입출력 예시
// let output = movingStuff([70, 50, 80, 50], 100);
// console.log(output); // 3

// let output = movingStuff([60, 80, 120, 90, 130], 140);
// console.log(output); // 4


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