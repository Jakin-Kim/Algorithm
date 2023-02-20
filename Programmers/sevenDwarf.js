function solution(arr) { 
  // 나의 풀이 
  let answer = []; 
  let gap = arr.reduce((acc, cur) => (acc += cur), 0) - 100; 
  for (let i = 0; i < arr.length; i++) { 
    for (let j = 0; j < arr.length; j++) { 
      if (arr[i] + arr[j] === gap && i > j) { 
        answer.push(arr[i], arr[j]); 
      } 
    } 
  } 
  
  // 선생님 풀이 
  let answer = arr; 
  let sum = arr.reduce((a, b) => a + b, 0); 
  for (let i = 0; i < 8; i++) { 
    for (let j = i + 1; j < 9; j++) { 
      if (sum - (arr[i] + arr[j]) === 100) { 
        arr.splice(j, 1); arr.splice(i, 1); 
      } 
    } 
  } 
  return answer; 
} 

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]; 
console.log(solution(arr));
