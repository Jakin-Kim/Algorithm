// CREMA 코딩테스트 1번문제

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
 * Complete the 'getFinalString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function getFinalString(s) {
    // Write your code here
    let eliminatedS = s;
    for(let i = 0; i < s.length; i++) {
        if(!eliminatedS.includes('AWS')) break;
        if(eliminatedS.includes('AWS')) {
            eliminatedS = eliminatedS.replace(/AWS/g, '');
        } 
    }
    
    if(!eliminatedS.length) {
        return -1;
    } else {
        return eliminatedS;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = getFinalString(s);

    ws.write(result + '\n');

    ws.end();
}
