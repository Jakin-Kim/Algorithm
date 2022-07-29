function callbackOnly(callback, response) {
  // TODO: 여기에 코드를 작성합니다.

  // 입력값: 함수와 객체
  // 출력값: 
    // status 속성값이 fail -> something went wrong
    // status 속성값이 success -> data 속성값에 입력받은 함수를 적용한 결과 리턴
  
  // 만약 status가 fail이라면
  if(response.status === 'fail') {
    return 'Something went wrong';
  }

  // 만약 status가 success라면
  if(response.status === 'success') {
    return callback(response.data);
  }
  
}
