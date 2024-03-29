// 문제설명
// XX 식물원에는 다양한 종류의 꽃이 자라고 있습니다.
// 꽃들은 피는 날짜와 지는 날짜가 정해져 있는데, 신기하게도, 정해진 날짜에 정확히 꽃이 피고, 정해진 날짜에 정확히 꽃이 집니다.
// 각 꽃의 피는 날짜와 지는 날짜가 주어질 때, 적어도 한 종류 이상의 꽃이 피어있는 기간은 얼마나 되는지 구하려 합니다.
// 단, 꽃이 지는 날은 꽃이 피어있지 않은 것으로 정합니다.
// 예를 들어, 꽃 세 종류의 [꽃이 피는 날짜 ~ 꽃이 지는 날짜]가 다음과 같을 때,
  // - [2일 ~ 5일]
  // - [3일 ~ 7일]
  // - [10일 ~ 11일]
// 2일 ~ 6일까지 5일 동안 적어도 한 종류 이상의 꽃이 피어있고, 7일 ~ 9일까지는 아무 꽃도 피어있지 않으며, 10일 하루 동안 한 종류 이상의 꽃이 피어있습니다.
// 따라서 적어도 한 종류 이상의 꽃이 핀 기간은 총 6일이 됩니다.
// 각 꽃의 피고 지는 기간이 담긴 2차원 배열 flowers가 매개변수로 주어질 때,
// 꽃이 적어도 한 종류 이상 핀 기간은 총 며칠인지 return 하도록 blossom 함수를 완성해주세요.

// 제한사항
// - flowers는 꽃이 피고 지는 날짜가 [꽃이 피는날, 꽃이 지는 날] 순서로 들어있는 2차원 배열입니다.
// - flowers의 길이(꽃 종류의 개수)는 1 이상 100 이하입니다.
// - 꽃이 피는 날짜와 지는 날짜는 1 이상 365 이하인 자연수입니다.
  // - (꽃이 피는 날짜 < 꽃이 지는 날짜)인 경우만 입력으로 주어지며, 해를 넘어가는 경우는 고려하지 않아도 됩니다.

// 입출력 예시
// 예시1) flowers: [[2,5],[3,7],[10,11]] // result: 6
// 예시2) flowers: [[3,4],[4,5],[6,7],[8,10]] // result: 5

// 입출력 예 설명
// 예시1) 문제의 예시와 같습니다.
// 예시2) 3,4,6,8,9일에 꽃이 적어도 한 종류 이상 피었습니다.

function blossom(flowers) {
  // 1. 꽃이 피어있는 날과 개화된 꽃의 갯수를 담은 객체를 생성한다. -> ex) { 개화일: 개화된 꽃의 갯수 }
  let flowerInfo = {};
  
  // 2. 각 꽃의 개화일이 담긴 배열을 하나씩 순회한다.
  for(let flower of flowers) {
  // 3. 각 꽃의 개화일수만큼 반복하면서 1에서 만든 객체에 값이 이미 존재한다면, +1하고 존재하지 않는다면 초기값(1)을 할당한다.
    let day = flower[0];
    for(let i = 0; i < flower[1] - flower[0]; i++) { // 꽃이 지는 날짜는 포함되지 않는 점 주의하여 반복문을 만든다.
      if(!flowerInfo[day]) {
        flowerInfo[day] = 1;
        day++;
      } else {
        flowerInfo[day]++;
        day++;
    }
  }
    
  // 4. 1~3에서 만든 객체의 키값을 하나씩 순회하면서 적어도 하나의 꽃이 피어있는 일수를 구한다.
  let answer = 0;
  for(let days in flowerInfo) {
    answer++;
  }
  return answer;  
}
