let solution = (input) => { const n = +input[0]; let d = new Array(n + 1).fill(0); const arr = input[1].split(' ').map((e) => +e); arr.unshift(0); d[0] = 0; for (let i = 1; i < arr.length; i++) { let max = arr[i] || 0; for (let j = i - 1; j >= 1; j--) { max = Math.max(max, d[j] * Math.floor(i / j) + d[i - j * Math.floor(i / j)]); } d[i] = max; } return d[n]; }; (function () { let inputLines = require('fs').readFileSync('/dev/stdin').toString().split('\n'); console.log(solution(inputLines)); })();
