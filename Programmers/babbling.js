function babbling(babbling) {
    let count = 0;
    let abledBabbling = ["aya", "ye", "woo", "ma"];
    
    for(let i in babbling) {
        let eachBab = babbling[i];
        for(let j in abledBabbling) {
            if(babbling[i].includes(abledBabbling[j])) { // 할 수 있는 옹알이라면, 체크하기
                // 할 수 있는 단어는 "x"로 치환하기(*주의: 바로 공백으로 두면 앞-뒤 문자가 새로운 단어를 형성하기)
                // (ex. 'wyeoo → woo → 공백'이 되지만, 사실 wyeoo는 말할 수 없는 단어이다. 아래와 같이하지 않으면 카운트를 하게된다.)
                eachBab = eachBab.replace(abledBabbling[j], "x"); 
            } 
            
            eachBab = eachBab.replace(/x/gi, ""); // "x"를 모두 공백으로 치환하고
            if(!eachBab.length) { // 공백이 되면(즉, 문자열이 0이 된다면), 갯수 1개를 인정하기
                count++;
                break;
            }
            // 할 수 없는 옹알이라면, 그냥 넘어가기
        }
    }
    return count;
}
