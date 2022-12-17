# 1. 삽입 정렬(Insertion Sort) - 섹션13

## 1) 삽입 정렬이란?

- 한 번에 하나의 항목을 올바른 위치에 삽입해서 배열의 정렬된 부분을 점진적으로 구축하는 것이다.

## 2) 삽입 정렬이라고 불리는 이유

- 말 그대로 한 번에 하나를 취해서 올바른 위치에 삽입하는 것이기 때문이다.

## 3) 삽입 정렬 예시

```jsx
// solution1. -> O(N^2)
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let insertedIdx = i;
        for(let j = i - 1; j >= 0; j--) {
            if(arr[j] > arr[insertedIdx]) {
                [arr[j], arr[insertedIdx]] = [arr[insertedIdx], arr[j]]
                insertedIdx--;
            }
        }
    }
    return arr;
}

// solution2. -> O(N^2)
function insertionSort(arr) {
	for(let i = 1; i < arr.length; i++) {
	  let currentVal = arr[i];
		for(let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = currentVal;
	}
	return arr;
}
```
