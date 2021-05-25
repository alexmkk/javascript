var isMonotonic = function(nums) {
  const newNums = [...nums]
  
  if (nums[0] < nums[nums.length - 1]) {
    newNums.reverse()
  }
  
  return newNums.every((val, i, arr) => {
    if (i === arr.length - 1) {
      return true
    } else {
      return val >= arr[i+1]
    }
  })
  
  return false
}

console.log(isMonotonic([-1,0,-3])) //false
console.log(isMonotonic([1,2,2,3])) //true
console.log(isMonotonic([6,5,4,4])) //true
console.log(isMonotonic([1,3,2])) //false
console.log(isMonotonic([1,2,4,5])) //true
console.log(isMonotonic([1,1,1]))//true