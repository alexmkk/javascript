// Input: nums = [1,3,4,2,2]
// Output: 2

var findDuplicate = function(nums) {
    let result = 0

    for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i])  !== i ) {
        result = nums[i]
        break
      }
    }

    return result
};

console.log(findDuplicate([1,1,2]))