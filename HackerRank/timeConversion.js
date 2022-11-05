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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    if(Number(s.slice(0,2)) < 12 && s.slice(8) === 'PM') {
        s = `${Number(s.slice(0,2))+12}` + s.slice(2,8);
    } else if(s.slice(0,2) === '12' && s.slice(8) === 'AM') {
        s = '00' + s.slice(2,8);
    } else if(s.slice(0,2) === '12' && s.slice(8) === 'PM') {
        s = s.slice(0,8)
    } else if(s.slice(8) === 'AM') {
        s = s.slice(0,8); 
    }
    return s;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
