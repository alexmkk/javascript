// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

var numIdenticalPairs = function(nums) {
    let result = 0

    nums.forEach((elem, i) => {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          result++
        }
      }
    })
    
    return result
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))