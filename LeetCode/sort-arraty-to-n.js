// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function(nums, n) {
   const result = [] 
   let start = 0
   
   while (start < n) {
      for (let i = start; i < nums.length; i += n) {
        result.push(nums[i])
      }

      start++
   }

   return result
};

console.log(shuffle([2,5,1,3,4,7], 3))
console.log(shuffle([1,1,2,2], 2))
console.log(shuffle([1,2,3,4,4,3,2,1], 4))