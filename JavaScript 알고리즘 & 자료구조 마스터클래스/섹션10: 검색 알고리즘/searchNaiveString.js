// solution1. O(N)
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

// solution2. O(N^2)
function searchNaiveString(longStr, shortStr) {
	let count = 0;
	for(let i = 0; i < longStr.length; i++) {
		for(let j = 0; j < shortStr.length; j++) {
			if(shortStr[j] !== longStr[i+j]) break;
			if(j === short.length - 1) count++;
		}
	}
	return count;
}
