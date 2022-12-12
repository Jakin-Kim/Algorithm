function searchNaiveString(longStr, shortStr) {
    let longIdx = 0;
    let shortIdx = 0;
    let count = 0;
    
    while(shortStr.length < longStr.length) {
        if(longStr[longIdx] === shortStr[shortIdx]) {
            longIdx++;
            shortIdx++;
            if(shortIdx === shortStr.length) {
                count++;
                shortIdx = 0;
            }
        } else {
            longIdx++;
        }

        if(longIdx === longStr.length) break;
    }

    return count;
}
