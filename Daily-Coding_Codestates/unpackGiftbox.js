function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.

  // recursive case
  // 배열(giftBox)의 각 요소를 하나씩 순회하면서 원하는 물건(wish)가 있는지 찾기(단, 배열 안에 배열이 있는 점 주의)
  for (let i = 0; i < giftBox.length; i++) {
    // 배열 안에 요소가 배열이 아닌 그냥 문자열이면 원하는 물건과 매칭되는지 찾기
    if (giftBox[i] === wish) {
      return true;
    } // 만약, 배열 안에 요소가 배열이면
    else if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish); // 선언해서 새로 할당해주는 것이 포인트! -> 왜? 
      // 왜 이렇게 해줬지? 배열 내 배열에서 원하는 값과 매칭이 안되었다고 false로 끝나면 안된다. 즉, false값이 있으면 안된다.
      // 배열 내 배열에서 나와서 바깥 배열(기존 배열)에서 순회가 계속 이루어지고 마지막 요소까지 wish가 있는지 여부를 확인해야한다!!
      if (result === true) { 
        return true;
      }
    } 
  }
  
  // base case
  if (giftBox.length === 0 || wish.length === 0) {
    return false;
  } else {
    return false;
  }
}
