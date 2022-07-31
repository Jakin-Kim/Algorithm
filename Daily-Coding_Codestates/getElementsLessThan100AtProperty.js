function lessThan100(number) {
  // solution 1
  return number < 100;

  // solution 2
  // return typeof number === 'number' && number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  const maybeArr = obj[property];
  if (Array.isArray(maybeArr)) {
    // solution 1
    return maybeArr.filter(function (el) {
      return typeof el === 'number' && lessThan100(el);
      // 위 코드는 타입이 el이 number가 아닌 경우 false를 리턴합니다.
      // 원리가 이해되지 않으면 아래 링크를 참고하세요.
      // https://ko.javascript.info/logical-operators#ref-494
    });

    // solution 2
    // return maybeArr.filter(lessThan100);
  }

  return [];
}
