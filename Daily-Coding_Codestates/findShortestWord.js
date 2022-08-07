function findShortestWord(arr) {
  const onlyStrings = arr.filter(function (el) {
    return typeof el === 'string';
  });

  if (onlyStrings.length === 0) {
    return '';
  }

  return onlyStrings.reduce(function (acc, cur) {
    if (acc.length <= cur.length) {
      return acc;
    } else {
      return cur;
    }
  });
}

