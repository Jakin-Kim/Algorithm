// I wasn't able to be accepted from the problem due to Runtime error, showing that 'l1.revsere is not a function'.
// I thought I was doing wrong with it so tried to figure out ths issue with Google but couldn't find it.
// The thing that I've found is the comments on Discussion section: "LeetCode has this kinds of bug from time to time".
// Here's the process that I've approached and it still works in console :)

let addTwoNumbers = function(l1, l2) {
    if((l1[0] === 0) && (l2[0] === 0)) {
        result.push(0);
        return result;
    }
    // 1. 각 l1, l2 배열의 요소를 거꾸로 한 배열을 만들기 (단, 기존 배열 변경되었으니 주의할 것) -> 배열을 리턴
    // let reversedArg = (ele) => ele.reverse();
    let reverseL1 = l1.reverse();
    let reverseL2 = l2.reverse();
    
    // 2. 거꾸로 만든 배열을 문자열로 만들고 숫자로 반환하기 -> 숫자를 리턴
    // let numOfReversedArg = (reversedArg) => Number(reversedArg.reduce((acc, cur) => acc + cur, ''));
    let numOfReversedL1 = Number(reverseL1.reduce((acc, cur) => acc + cur, ''));
    let numOfReversedL2 = Number(reverseL2.reduce((acc, cur) => acc + cur, ''));
    
    // 3. 각 숫자를 더하기
    let sumOfTwoRvrsdArgs = numOfReversedL1 + numOfReversedL2;
    
    // 4. 숫자를 문자로 바꾼 후에 각 문자를 배열의 요소르 넣기 -> 문자형 숫자요소가 담긴 배열 리턴
    let arrOfSumWithStr = String(sumOfTwoRvrsdArgs).split('');
    
    // 5. 'arrOfSumWithStr'배열을 순회하면서 각 요소를 숫자형으로 바꾼 배열을 만들고 배열의 요소 순서를 거꾸로 한 배열을 만들기 -> 각 숫자 요소가 담긴 배열 리턴(결과)
    return arrOfSumWithStr.map((ele) => Number(ele)).reverse();
        
};
