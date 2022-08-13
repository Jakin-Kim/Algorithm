// Implementation Queue
// Queue 구현을 위한 기본적인 코드가 작성되어 있습니다. Queue 자료구조의 특성을 이해하고 FILL_ME_IN 을 채워 테스트를 통과해주세요.

// 멤버 변수
// 데이터를 저장할 Object 타입의 storage
// 큐의 가장 앞을 가리키는 Number 타입의 포인터 front
// 큐의 가장 뒤를 가리키는 Number 타입의 포인터 rear

// 메서드
// size(): 큐에 추가된 데이터의 크기를 리턴해야 합니다.
// enqueue(): 큐에 데이터를 추가할 수 있어야 합니다.
// dequeue(): 가장 먼저 추가된 데이터를 큐에서 삭제하고 삭제한 데이터를 리턴해야 합니다.

// 주의사항
// 내장 객체 Array.prototype에 정의된 메서드는 사용하면 안 됩니다.
// 포인터 변수 front, rear의 초기값은 -1, 0, 1등 임의로 지정할 수 있지만 여기서는 0으로 합니다.

// 사용 예시
// const queue = new Queue();

// queue.size(); // 0
// for(let i = 1; i < 10; i++) {
//   	queue.enqueue(i);
// }
// queue.dequeue(); // 1
// queue.dequeue(); // 2
// queue.size(); // 7
// queue.enqueue(10);
// queue.size(); // 8
// queue.dequeue(); // 3
// queue.dequeue(); // 4
// queue.size(); // 6
// ...

class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0; // 끝 값
  }

  size() {
    return this.rear - this.front; // 0
  }
	
	// 큐에 데이터를 추가 할 수 있어야 합니다.
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear += 1;
  }
	
	// 가장 먼저 추가된 데이터가 가장 먼저 추출되어야 합니다.
  dequeue() {
    // 빈 큐에 dequeue 연산을 적용해도 에러가 발생하지 않아야 합니다
    if (this.rear === 0 || this.rear - this.front === 0) {
      return;
    }

    const result = this.storage[this.front];
    delete this.storage[this.front];
    this.front += 1;

    return result;
  }
}
