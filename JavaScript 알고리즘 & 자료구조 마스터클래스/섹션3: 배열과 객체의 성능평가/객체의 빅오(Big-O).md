# 1. 객체(object)의 빅오(Big-O)

1. 객체의 빅오
    1. 삽입(Insertion) - `O(1)`
    2. 제거(Removal) - `O(1)`
    3. 탐색(Searching) - `O(N)
    4. 접근(Access) - `O(1)`
2. 왜 객체(object)는 배열(array)보다 빠를까?
    - 객체는 단지 key-value 쌍으로 순서에 상관없이 데이터가 담겨있기 때문이다.
3. 객체 메소드의 빅오
    1. `Object.keys()` - `O(N)` ⇒ 탐색
    2. `Object.values()` - `O(N)` ⇒ 탐색
    3. `Object.entries()` - `O(N)` ⇒ 탐색
    4. `hasOwnProperty()` - `O(1)`

## 2. 배열(array)의 빅오(Big-O)

1. 배열의 빅오
    1. 삽입(Insertion) - 그때그때 다르다
    2. 제거(Removal) - 그때그때 다르다
    3. 탐색(Searching) - `O(N)`
    4. 접근(Access) - `O(1)`
2. 왜 배열(array)은 객체(object)보다 느릴까?
    - 배열은 순서에 따라 데이터를 나열하기 때문이다.
    - 데이터 삽입/제거 시, 어떻게 조작하는지에 따라 효율성이 달라진다.
      - 예를 들면, 배열 시작부분에 데이터를 추가(`unshift`)/제거(`shift`)하는 것보다 마지막에 추가(`push`)/제거(`pop`)하는 것이 훨씬 효율적이다.
3. 배열 메소드의 빅오
    1. `push()` - `O(1)`
    2. `pop()` - `O(1)`
    3. `shift()` - `O(N)`
    4. `unshift()` - `O(N)`
    5. `concat()` - `O(N)`
    6. `slice()` - `O(N)`
    7. `splice()` - `O(N)` 
    8. `sort()` - `O(N * logN)`
    9. `forEach/map/filter/reduce` etc - `O(N)`
