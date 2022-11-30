// Write a function called 'maxSubarraySum' 
// which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, n) {
	if(!arr.length) return null;

	let subArr = [];
	let maxSum = 0;
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
