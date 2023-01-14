// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

// TODO
function insert(heap, item) {
  heap.push(item);
  if(heap.length > 1) {
    let curIdx = heap.length - 1; 
    let parentIdx = getParentIdx(curIdx)
    while(parentIdx >= 0 && heap[parentIdx] > heap[curIdx]) {
      swap(parentIdx, curIdx, heap);
      curIdx = parentIdx;
      parentIdx = getParentIdx(curIdx);
    }
  }
  return heap;
}

// TODO
function removeRoot(heap) {
  swap(0, heap.length - 1, heap);
  heap.pop();
  if(!heap.length) return [];

  let curIdx;
  let minIdx = 0;
  while(curIdx !== minIdx) {
    curIdx = minIdx;
    let left = curIdx * 2 + 1;
    let right = curIdx * 2 + 2;

    if(left < heap.length && heap[left] < heap[minIdx]) minIdx = left;
    if(right < heap.length && heap[right] < heap[minIdx]) minIdx = right;

    swap(curIdx, minIdx, heap);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};

// TODO
const heapSort = function (arr) {
  let minHeap = binaryHeap(arr);
  let sorted = [];
  while(minHeap.length > 0) {
    sorted.push(minHeap[0]);
    minHeap = removeRoot(minHeap);
  }
  return sorted;
};
