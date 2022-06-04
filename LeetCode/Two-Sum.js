// I've got accepted when I run the test
// However, once I press 'submit' button, the result status came out wrong... don't know why... lol

let twoSum = function(nums, target) {
    // Given: an array of integers(num) and an integer(target)
    // Return: indices of two numbers in the array of 'nums' adding to 'target'
    
    // dual for loop
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                nums[j + 1];
            }
            if(nums[i] + nums[j] === target) {
                result.push(i) && result.push(j);
                return result;
            }
        }
    }
};
