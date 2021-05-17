function twoSum(numbers, target) {
  const numObject = {}
  
  for (let i = 0; i < numbers.length; i++) {
    numObject[numbers[i]] = i
  }

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i]

    if(numObject[diff] && numObject[diff] !== i) {
      return [i + 1, numObject[diff] + 1]
    }
  }

  return []
}

console.log(twoSum([1,2,3,4,7], 14))