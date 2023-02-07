function weirdNum(s) {
    let arr = s.split(' ');
    let result = [];for(let i = 0; i < arr.length; i++) {
        let words = arr[i].split('').map((word, idx) => {
            return (idx % 2) ? word : word.toUpperCase();
        }).join('');
        result.push(words);
    }
    return result.join(' ');
}
