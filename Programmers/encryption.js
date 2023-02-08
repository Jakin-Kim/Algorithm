function encryption(s, skip, index) {
    var answer = '';
    // 1. alphabet이 담긴 배열 만들기
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // 2. s의 문자열을 하나씩 순회하기
    for(let i = 0; i < s.length; i++) { // 'aukks' -> 'a'
    // 3. slice로 해당되는 문자만 잘라내기
        let findIdx = alphabet.findIndex((ele) => ele === s[i]); // idx = 0;
        let endIdx = findIdx + index + 1
        let slicedAlph = alphabet.slice(findIdx + 1, endIdx); // slice(1,6) -> ['b', 'c', 'd', 'e', 'f']
        
        
    // 4. skip에 있는 문자가 3.에서 만든 배열에 담겨있다면, 해당 요소만 제거하기
        for(let j = 0; j < slicedAlph.length; j++) {
            if(skip.includes(slicedAlph[j])) {
                slicedAlph.splice(j,1);
    // 5. 4.에서 제거한 갯수만큼 요소 추가하기
                slicedAlph.push(s[endIdx]);
                endIdx++;
            }
        }
        answer += slicedAlph[slicedAlph.length - 1]
    }
    
    // 6. 맨 마지막 요소를 하나씩 결합해서 return하기
    return answer;
}
