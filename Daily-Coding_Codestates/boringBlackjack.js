function boringBlackjack(cards) {
    // 입력값(cards) : 카드가 숫자로 들어있는 배열( 0<= cards <= 50 )
    // 출력값: 3장씩 조합해서 소수가 되는 경우의 수
    
    let count = 0; // 소수 판별할 때마다 1씩 증가

    // 1. 조합을 이용해서 만들어낸 숫자가 소수인지 판별해주는 함수 만들기
    function isPrime(num) {
        for(let i = 2; i < num; i++) { // 0과 1을 제외한 수부터 소수이기 때문에 
            if(num % i === 0) return false;
        }
        return true;
    }

    // 2. nCr((cards.length)C3)조합을 통해 나온 숫자의 합을 판별하기
        // 2-1. 순서가 상관없는 조합이기 때문에 숫자를 한번 골랐으면 +1해서 이동해줘도 된다.(굳이 3장씩 조합한 숫자들을 담아줄 필요가 없다)
    for(let i = 0; i < cards.length; i++) {
        for(let j = i + 1; j < cards.length; j++) {
            for(let k = j + 1; k < cards.length; k++) {
                if(isPrime(cards[i] + cards[j] + cards[k])) count++;
            }   
        }
    }

    // 3. 소수 판별하면서 카운트한 숫자 리턴하기
    return count;
}
