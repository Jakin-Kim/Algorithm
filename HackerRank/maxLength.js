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
 * Complete the 'maxLength' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 */

function maxLength(a, k) {
    // Write your code here
    const sumOfArr = (arr) => {
        return arr.reduce((a, b) => a + b, 0);
    }

    let subArr = [];
    for (let i = 0; i <= a.length; i++) {
        for (let j = i + 1; j <= a.length; j++) {
            if (j - i > subArr.length && sumOfArr(a.slice(i, j)) <= k) {
                subArr = a.slice(i, j);
            }
        }
    } 
    return subArr.length;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const aCount = parseInt(readLine().trim(), 10);

    let a = [];

    for (let i = 0; i < aCount; i++) {
        const aItem = parseInt(readLine().trim(), 10);
        a.push(aItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = maxLength(a, k);

    ws.write(result + '\n');

    ws.end();
}
