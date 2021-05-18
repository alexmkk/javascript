// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

var smallerNumbersThanCurrent = function(nums) {
  let result = []

  nums.forEach((elem, i) => {
    let sum = 0
    for (let j = 0; j < nums.length; j++) {
      if (elem > nums[j]) {
        sum++
      }
    }
    result.push(sum)
  })

  return result
};

console.log(smallerNumbersThanCurrent([7,7,7,7]))