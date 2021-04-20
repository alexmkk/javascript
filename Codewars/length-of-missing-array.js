function getLengthOfMissingArray(arrayOfArrays) {
  let len = 0
  
  if (arrayOfArrays === null || arrayOfArrays.includes(null) || arrayOfArrays.length === 0) return 0

  const sortArrayOfArrays = arrayOfArrays.sort((a,b) => a.length - b.length)
  
  if (sortArrayOfArrays[0].length === 0) return 0

  for(let i = 0; i < sortArrayOfArrays.length; i++) {
    if (sortArrayOfArrays[i].length !== sortArrayOfArrays[i+1].length - 1) {
      len = sortArrayOfArrays[i].length + 1;
      break;
    }
  }
                              
  
  return len
}

// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]))
console.log(getLengthOfMissingArray([ ]))