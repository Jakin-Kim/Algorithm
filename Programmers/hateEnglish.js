function hateEnglish(numbers) {
    var answer = '';
    let strNum = '';
    while(numbers.length > 0) {
        strNum += numbers[0];
        numbers = numbers.slice(1);
        if(strNum === 'one') {
            answer += '1';
            strNum = '';
        } else if(strNum === 'two') {
            answer += '2';
            strNum = '';
        } else if(strNum === 'three') {
            answer += '3';
            strNum = '';
        } else if(strNum === 'four') {
            answer += '4';
            strNum = '';
        } else if(strNum === 'five') {
            answer += '5';
            strNum = '';
        } else if(strNum === 'six') {
            answer += '6';
            strNum = '';
        } else if(strNum === 'seven') {
            answer += '7';
            strNum = '';
        } else if(strNum === 'eight') {
            answer += '8';
            strNum = '';
        } else if(strNum === 'nine') {
            answer += '9';
            strNum = '';
        } else if(strNum === 'zero') {
            answer += '0';
            strNum = '';
        }
    }
    return Number(answer);
}
