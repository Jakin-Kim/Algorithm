// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false

// 내가 풀이한 방법
function validAnagram(str1, str2) { // O(N)
    // 1. str1과 str2의 길이가 일치하는지 확인한다. -> 일치하지 않으면 false
    if(!str1.length && !str2.length) return true;
    if(str1.length !== str2.length) return false

    // 2. str1 각 문자의 등장 횟수가 str2 각 문자의 등장 횟수와 일치하는지 확인하기 위해서 str1, str2 각 문자의 등장 횟수가 담긴 객체를 만든다.
    let charObj1 = {};
    let charObj2 = {};
    let keyCount1 = 0;
    let keyCount2 = 0;
    // str1 각 문자의 등장횟수가 담긴 객체 -> {a: 3, n: 1, g: 1, r: 1, m: 1}
    for(let char of str1) {
        if(!charObj1[char]) { // charObj1에 없는 문자라면,
            charObj1[char] = 1;
            keyCount1++;
        } else { // charObj1에 이미 있는 문자라면,
            charObj1[char]++;
        }
    }

    // str2 각 문자의 등장횟수가 담긴 객체 -> {a: 3, n: 1, g: 1, r: 1, m: 1}
    for(let char of str2) {
        if(!charObj2[char]) { // charObj2에 없는 문자라면,
            charObj2[char] = 1;
            keyCount2++;
        } else { // charObj2에 이미 있는 문자라면,
            charObj2[char]++;
        }
    }

    // 3. str1의 데이터가 담긴 객체 내용과 str2의 데이터가 담긴 객체 내용이 일치하는지 확인 후, 
    // 4. 일치 여부를 boolean으로 리턴한다.
    let charCount1 = 0;
    let charCount2 = 0;
    if(keyCount1 > keyCount2) {
        for(let key in charObj1) {
            if((charObj1[key] === charObj2[key])) {
                charCount1++
            }
            if(keyCount1 === charCount1) return true;
        }
    } else {
        for(let key in charObj2) {
            if((charObj1[key] === charObj2[key])) {
                charCount2++
            }
            if(keyCount2 === charCount2) return true;
        }
    }
    return false;
}


// 해답으로 제공된 풀이 방법
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup)

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
