function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  
  // 입력값: matryoshka 정보를 담은 객체와 수
  // 출력값: 조건에 맞는 인형이 있는지 여부(true/false)

  // recursize case
  if (matryoshka.size === size) {
    return true;
  }
  // matryoshka객체 안에 matryoshka객체가 존재하고
  // 그 내부 matryoshka객체의 size가 파라미터로 전달된 size와 같다면
  if (matryoshka.matryoshka && matryoshka.size > size) {
    return findMatryoshka(matryoshka.matryoshka, size);
  } 

  // base case
  // 마지막 끝까지 갔을 때 matryoshka객체가 존재하지 않거나
  // 그 내부 matryoshka객체의 size가 파라미터로 전달된 size와 같지 않다면
  return false;
}
