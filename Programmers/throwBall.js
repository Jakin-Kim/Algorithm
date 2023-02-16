function throwBall(numbers, k) {
    let ansIndex = 0;
    
    for(let i = 0; i < k; i++){
        ansIndex += 2;    
        
        if(ansIndex > numbers.length){
            ansIndex -= numbers.length;
        }
    }
    
    return numbers[ansIndex - 2];
}
