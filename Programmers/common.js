function common(common) {
    var answer = 0;
    for(let i = 0; i < common.length; i++) {
        // 앞-뒤 요소의 차이 값이 같을 때(등차수열일 때)
        let subtraction = common[i+1] - common[i];
        let ratio = common[i+1] / common[i];
        if(common[i+1] - common[i] === common[i+2] - common[i+1]) {
            return common[common.length - 1] + subtraction;
        }
        // 앞-뒤 요소의 나눈 값이 같을 때(등비수열일 때)
        if(common[i+1] / common[i] === common[i+2] / common[i+1]) {
            return common[common.length - 1] * ratio;
        }
    }
    
}
