function calculateScore(records, value) {
  // TODO: Your code here!
  if(records.length === 0) { return 0}

  // 입력값: 객체를 요소로 갖는 배열과 문자열
  // 출력값: 'animal'속성값이 문자열과 일치 -> 'score'속성값 모두 더하기

  const animalInfo = records.filter(function(obj){
    if(obj.animal === value) {
      return obj; // score이 담긴 배열이 나옴
    }
  });

  const onlyScore = animalInfo.map(function(obj){
    return obj.score;
  })

  return onlyScore.reduce(function(x, y){
    return x + y;
  }, 0)

}
