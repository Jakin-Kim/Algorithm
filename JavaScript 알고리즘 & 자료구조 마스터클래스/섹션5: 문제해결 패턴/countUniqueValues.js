// Multiple Pointers - countUniqueValues
// Implement a function called 'countUniqueValues', which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.

// Examples:
// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4


// Time Complexity - O(n)
// Space Complexity - O(n)

// Bonus
// You must do this with constant or O(1) space and O(n) time.

// 내가 풀이한 방법
function countUniqueValues(arr) {
	let countInfo = {};
	let count = 0;
	for(let ele of arr) {
		countInfo[ele] ? countInfo[ele]++ : countInfo[ele] = 1
	}

	for(let key in countInfo) {
		count++;
	}
	return count;
}
