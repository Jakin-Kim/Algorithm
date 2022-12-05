# 1. 재귀(Recursion) - 섹션7

## 1) 재귀(recursion)이란?

> A process(a function in our case) that calls itself.
> 
- 재귀는 자기자신을 호출하는 과정이다.

## 2) 왜 재귀를 알아야하는가?

1. JS을 사용한다면 이미 재귀를 사용하기 때문이다. ex) `JSON.parse()` / `JSON.stringify()`
2. DOM은 중첩된 트리 구조로 되어있기 때문이다. 즉, 모든 노드를 조회할 때 유용하다.
    1. document.getElementById
    2. document.querySelector
3. 객체 순회(Object traversal)에 사용되기 때문이다.
4. 트리, 그래프 등 복잡한 자료구조(data structure)를 쉽게 처리할 수 있다.
5. 반복문보다 깔끔하게 이해될 때도 있다.

## 3) Call Stack

1. Call Stack이란?
    - 자료구조 중에 하나로써 FILO(First Input, Last Output)의 특징을 가지고 있다.
2. Call Stack 이해하기
    - 참고: Chrome → console창(F12) → Sources → Snippets 예시 만들기 → Debugging → Call Stack 변화과정 살펴보기

```jsx
function takeShower() {
	return "Showering!";
}

function eatBreakfast() {
	let meal = cookFood();
	return `Eating ${meal}`;
}

function cookFood() {
	let items = ["Oatmeal", "Eggs", "Protein Shake"];
	return items[Math.floor(Math.random()*items.length];
}

function wakeUp() {
	takeShower();
	eatBreakfast();
	console.log("Ok, ready to go to work!");
}

wakeUp();
```

1. 재귀에서 call stack을 언급하는 이유
    - **재귀함수는 계속해서 자기자신을 호출하기 때문에 스택(stack)에 계속 쌓이게 된다. 즉, 스택에 계속해서 쌓지 않으려면 어느 시점에 종료되어야 한다.**

## 4) 재귀함수의 필수요소

1. Base Case
2. Different Input

## 5) 재귀함수가 동작하는 방식

1. 다른 input으로 동일한 함수(자기자신)을 계속 호출한다. → Different Input
2. 탈출조건을 통해 재귀에서 나와야 한다. → Base Case
    1. 예시1)
        
        ```jsx
        function countDown(num) {
        	**// base case**
        	if(num <= 0) {
        		console.log("All done!");
        		return;
        	}
        
        	console.log(num);
        	num--;
        
        	**// recursive case**
        	countDown(num);
        }
        
        countDown(3);
        ```
        
    2. 예시2)
        - 참고: Chrome → console창(F12) → Sources → Snippets 예시 만들기 → Debugging → Call Stack 변화과정 살펴보기
        
        ```jsx
        function sumRange(num) {
        	**// base case**
        	if(num === 1) return 1;
        
        	**// recursive case**
        	return num + sumRange(num - 1);
        }
        
        sumRange(5);	
        ```
        
        ```jsx
        function factorial(num) {
        	**// base case**
        	if(num === 1) return 1;
        
        	**// recursive case**
        	return num * factorial(num - 1);
        }
        ```
        
    

## 6) 재귀함수의 잠재적인 위험

1. 탈출조건(Base Case)가 존재하지 않거나, 특정 값을 반환하지 않는 경우
    1. 예시1) → 탈출조건이 없기 때문에 무한 루프가 된다.
        
        ```jsx
        function factorial(num) {
        	**// recursive case**
        	return num * factorial(num - 1);
        }
        ```
        
    2. 예시2) → `return`이 없기 때문에 무한 루프가 된다.
        
        ```jsx
        function factorial(num) {
        	**// base case**
        	if(num === 1) **console.log(1**);
        
        	**// recursive case**
        	return num * factorial(num - 1);
        }
        ```
        
2. Input이 다르지 않고 같은 경우
    1. 예시1)
        
        ```jsx
        function factorial(**num**) {
        	**// base case**
        	if(num === 1) return 1;
        
        	**// recursive case**
        	return num * factorial(**num**);
        }
        ```
        

## 7) Helper Method

1. 헬퍼 메소드란?
    - 외부 함수(outer function)의 내부에 포함된 재귀함수이다.
    
    ```jsx
    function collectOddValues(arr) {
    	let result = [];
    	function helper(helperInput){
    		if(helperInput.length === 0) return;
    		
    		if(helperInput[0] % 2 !== 0){
    			result.push(helperInput[0]);
    		}
    
    		helper(helperInput.slice(1));
    	}
    	helper(arr);
    	return result;
    }
    
    collectOddValues([1,2,3,4,5,6,7,8,9]);
    ```
    

## 8) 순수 재귀함수(Pure Recursion)

1. 순수 재귀함수란?
    - 필요한 모든 코드가 함수 자체에 포함되며 재귀적인 함수이다.
    
    ```jsx
    function collectOddValues(arr) {
     let newArr = [];
    	
    	if(arr.length === 0) {
    		return newArr;
    	}
    
    	if(arr[0] % 2 !== 0) {
    		newArr.push(arr[0]);
    	}
    
    	newArr = newArr.concat(collectOddValues(arr.slice(1)));
    	return newArr;
    }
    
    collectOddValues([1,2,3,4,5]);
    ```
    
2. 순수 재귀함수를 사용 팁
    1. 배열(array)을 사용하는 경우
        1. 불변성(`immutability`)을 지킬 수 있는 메소드(`slice`, `spread` 연산자, `concat`)를 사용하기
    2. 문자열(string)을 사용하는 경우
        1. 불변성(`immutability`)을 지킬 수 있는 메소드(`slice`, `substr`, `substring`)를 사용하기
    3. 객체(object)를 사용하는 경우
        1. 불변성(`immutability`)을 지킬 수 있는 메소드(`Object.assign`, `spread` 연산자)를 사용하기
