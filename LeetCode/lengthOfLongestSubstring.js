/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // input: string(s)
    // output: the length of the longest substring without repeating characters
    
    // 1. to keep track of all the unique characters
    let map = {};
    // 2. for initializing the length of max as zero
    let maxLen = 0; 
    // 3. to keep track of substring length
    let start = 0;
    // 4. iterating string(s) of each letter 
    for (let end = 0; end < s.length; end++) {
        let lastChar = s[end]; // current character
        // 5. checking if the lastest character is in the 'map'
        if (map[lastChar] === undefined) {
            map[lastChar] = 0; // initializing it as zero       
            // point1: The value(here above is 0) defines the each character to see if it's counted or not.
        }
        map[lastChar] += 1; 
        // Due to the duplicated string isn't allowed, if 'lastChar' appears more than one time when iterating string(parameter: s),
        // 
        while(map[lastChar] > 1) { 
            let firstChar = s[start];
            map[firstChar] -= 1;
            start += 1;          
        }
        maxLen = Math.max(maxLen, end - start + 1);    
    }
    return maxLen;
};
// Reference
// https://www.youtube.com/watch?v=w-dBC1n_4ZA
