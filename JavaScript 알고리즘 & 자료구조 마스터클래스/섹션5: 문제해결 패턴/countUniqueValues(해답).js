function countUniqueValues(arr) {
	let i = 0;
	// 반복문 내에서 i배열과 j배열의 각 위치(index)를 비교하도록 한다.
	for(let j = 1; j < arr.length; j++) { // 하나의 반복문에서 두 값을 비교한다.
		// 만약 두 배열이 다르다면, 
		if(arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1; // i는 index이기 때문에 +1 해야한다.
}
