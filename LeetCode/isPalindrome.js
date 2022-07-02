const isPalindrome = function(x) {
    let stringifiedX = String(x);
    for (let i = 0; i < stringifiedX.length; i++) {
        (stringifiedX[i] === stringifiedX[stringifiedX.length - 1 - i]) ? true : false;
    }
};
