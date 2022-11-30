// Write a function called 'maxSubarraySum' 
// which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// 내가 풀이한 방법
function maxSubarraySum(arr, n) {
	if(!arr.length) return null;

	let subArr = [];
	let maxSum = -Infinity; // 배열의 요소가 음수일 수도 있기 때문에
	for(let i = 0; i < arr.length; i++) {
		for(let j = i; j < n+i; j++) {
			subArr.push(arr[j]);
		}
		let subSum = subArr.reduce((acc,cur) => acc + cur) 
		if(maxSum <= subSum) {
			maxSum = subSum;
			subArr = [];
		} else { 
			// subArr 비워주기
			subArr = [];
		}
	}
	return maxSum;
}

// 해결책1
function maxSubarraySum(arr, num) { // [1,2,5,2,8,1,5], 4
	if(num > arr.length) return null;

	let max = -Infinity;
	for(let i = 0; i < arr.length - num + 1; i++) {
		temp = 0;
		for(let j = 0; j < num; j++) {
			temp += arr[i+j];
		}
		if(temp > max) {
			max = temp;
		}
	}
	return max;
}
