function classicMovies(arr, year) {
  // TODO: 여기에 코드를 작성합니다.
  // 입력값: 객체를 요소로 갖는 배열과 연도
  // 출력값: year 이전의 영화의 이름과 director를 갖는 요소들의 배열

  // year이전의 영화정보를 movie 변수에 할당 -> 배열
  const movie = arr.filter(function(obj){
    return obj.year <= year;
  });

  return movie.map(function(movieInfo){
    return `${movieInfo.title} by ${movieInfo.director}`;
  });
}
