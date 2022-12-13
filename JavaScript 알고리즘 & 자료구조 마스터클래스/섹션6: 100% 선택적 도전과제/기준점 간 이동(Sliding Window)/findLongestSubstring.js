// findLongestSubstring('rithmschool') -> 7 'rithmsc'
// findLongestSubstring('thisisawesome') -> 6 'awesom'
// findLongestSubstring('thecatinthehat') -> 7 'hecatin'
// findLongestSubstring('longestsubstring') -> 8 'ubstring'
// findLongestSubstring('thisishowwedoit') -> 6 'wedoit'
// findLongestSubstring('bbbbbb') -> 1 'b'
function findLongestSubstring(str){
    // 문자열을 하나씩 순회한다.
    // 하위 문자열(subStr)이 하나씩만 들어갔는지 파악한다.
    // 가장 긴 문자열의 길이를 저장한다.
    // 중복되는 문자열이 발생하면 하위 문자열(subStr)을 초기화시킨다.
    
    let subStr = '';
    let subStrIdx = 0;
    let len = 0;
    
    if(!str.length) return 0;
    for(let i = 0; i < str.length; i++) {
        // subStr에 들어간 문자인지 여부를 파악한다.
        if(!subStr.includes(str[i])) { // subStr에 없는 문자인 경우,
            subStr += str[i]; // 기존 subStr 문자열과 합치기
            if(len < subStr.length) {
                len = subStr.length; // 최대로 긴 문자열의 길이 만들기
            }
        } else if(subStr.includes(str[i])) { // subStr에 있는 문자인 경우,
            if(len < subStr.length) {
                len = subStr.length; // 최대로 긴 문자열의 길이 만들기
            }
            subStr = ''; // 빈 문자열로 만들기
            i = str.indexOf(str[i]); // 현재 이동 중인 인덱스 값 변경하기
        } 
        
        if(i === str.length - 1 && !subStr.includes(str[i])) break;
    }
    return len;
}
