// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function(nums) {
  const result = []
    
  function getSumm(arr, end) {
      let sum = 0
      for (let i = 0; i <= end; i++) {
          sum += arr[i]
      }
      return sum
  }
  
  nums.forEach((elem, i) => {
    result.push(getSumm(nums, i))
  })
  
  return result
};

console.log(runningSum([3,1,2,10,1]))