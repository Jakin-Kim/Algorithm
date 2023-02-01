function babbling(bab) {
    let count = 0;
    let abledBabbling = ["aya", "ye", "woo", "ma"];
    
    for(let i = 0; i < babbling.length; i++) {
        for(let j = 0; j < abledBabbling.length; j++) {
            if(babbling[i].includes(abledBabbling[j])) { // 할 수 있는 옹알이라면, 체크하기
                babbling[i] = babbling[i].replace(abledBabbling[j], '');
            } 
            if(!babbling[i].length) { // 문자열이 0이 된다면, 갯수 1개 인정
                count++;
                break;
            }
            
            // 할 수 없는 옹알이라면, 그냥 넘어가기
        }
        
    }
    return count;
}
