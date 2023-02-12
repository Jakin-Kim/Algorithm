function cipher(cipher, code) {
    let answer = '';
    let originCode = code;
    for(let i = 0; i < cipher.length; i++) {
        if(i + 1 === code) {
            code += originCode;
            answer += cipher[i];
        }
    }
    return answer;
}
