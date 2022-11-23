'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) { // O(N)
    // Write your code here
    // 타입을 담을 새로운 객체를 만든다.
    let typeCnt = {};
    let freq = 0;
    // 각 배열의 요소를 순회하면서 프로퍼티를 카운트한 값을 객체에 넣는다.
    for(let type of arr) { // 공간복잡도 고려하여 for...of문 사용하기
        if(!typeCnt[type]) { // 값이 없다면, 새로 추가
            typeCnt[type] = 1;
        } else { // 값이 있다면, 하나 더 추가
            typeCnt[type]++;
        }
        
        if(freq < typeCnt[type]) { // typeCnt에서 가장 많은 횟수(최댓값) 찾기 
            freq = typeCnt[type];
        }
    }
        
    let lowestType = 0;
    for(let type in typeCnt) {
        // freq(최댓값)와 같으면서 && 가장 작은 타입의 키인 경우 리턴하기
        if(freq === typeCnt[type] && Number(type) < Number(type) + 1) {
            return Number(type);
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
