function decryptCaesarCipher(str, secret) {
  // TODO: 여기에 코드를 작성합니다.
  /**
   * 1. 카이사르 암호로 된 str을 입력받는다.
   * 2. str을 복호화한다.
   *   - alphabet -> 알파벳 집합을 배열로 선언 , 초기화한다.
   *   - str을 순회한다.
   *   - 순회하면서 str[i] 에 접근한다.
   *   - alphabet.indexOf(str[i])를 이용해 alphabet에 속한 index를 얻어낸다.
   *   - 
   *   - 얻어낸 index를 이용해 secret를 빼줌으로써 복호화된 문자열을 구한다.
   *   - 생각해줘야 할 예외
   *     - index - secret 이 음수가 나올 경우 : alphabet[0] 에서 alphabet[25]로 이동해야함.
   *   - newStr += alphabet[index - secret];
   * 3. 복호화한 newStr을 리턴한다.
   *   
   * 
   */
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let idx = 0;
  
  let newArr = '';
  for(let i = 0; i < str.length; i++){
    if(str[i] === ' '){
      newArr += ' ';
    }else{
      idx = alphabet.indexOf(str[i]);
      if(idx-secret >= 0){          //1-2 = -1
       newArr += alphabet[idx-secret];
      }else{
        newArr += alphabet[26+(idx-secret)];
      }
    }
  }
  return newArr;
  }
