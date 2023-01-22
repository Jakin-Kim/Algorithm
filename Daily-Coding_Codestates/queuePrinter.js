function queuePrinter(bufferSize, capacities, documents) {
    let count = 0;
    let queue = [];
    let totalBufferVolume = 0;

    // queue에 bufferSize만큼 0을 삽입합니다. (queue에 들어갈 요소의 고정 갯수를 만들어 주는 과정입니다.)
    for(let i = 0; i < bufferSize; i++){
        queue.push(0);
    }
    
    // ~23번째 줄까지의 코드는 프린터를 처음 실행했을 때를 다룹니다.
    // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
    let currentDocument = documents.shift();
    
    // queue의 제일 앞에 currentDocument를 삽입하고, 제일 마지막 요소를 없앱니다.
    queue.unshift(currentDocument);
    queue.pop();
    
    // totalBufferVolume(총 용량)에 currentDocument의 크기를 합칩니다.
    totalBufferVolume = totalBufferVolume + currentDocument;

    // 1 초가 지났다는 것을 count를 증가하며 나타냅니다.
    count++;
    
    // totalBufferVolume(총 용량)가 0이 될 때까지 반복합니다.
    while(totalBufferVolume){
        
        // totalBufferVolume(총 용량)에 queue에 있는 마지막 요소의 용량을 제거합니다.
        totalBufferVolume = totalBufferVolume - queue.pop();
        
        // documents 배열에서 제일 앞의 있는 요소를 하나 빼내 currentDocument에 할당합니다.
        currentDocument = documents.shift();
        
        // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 작거나 같다면
        if(currentDocument + totalBufferVolume <= capacities){

            // queue에 currentDocument를 삽입하고 totalBufferVolume(총 용량)에 currentDocument 용량을 추가합니다.
            queue.unshift(currentDocument);
            totalBufferVolume = totalBufferVolume + currentDocument;

            // 만약 현재 문서와 총 용량을 더했을 때, 최대 용량(capacities)보다 크다면
        }else{

            // 다시 documents에 currentDocument를 집어넣고 queue에는 0을 삽입합니다.
            documents.unshift(currentDocument);
            queue.unshift(0);
        }

        // 한 번 반복할 때마다 count(초)를 올립니다.
        count++;
    }
    
    // count를 반환합니다.
    return count;
}
