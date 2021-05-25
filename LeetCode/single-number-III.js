var singleNumber = function(nums) {
  const result = []
  
  nums.sort((a,b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      result.push(nums[i])
    }
  }

  return result
};

console.log(singleNumber([1,2,1,3,2,5]))
console.log(singleNumber([0,1]))