var minimumAbsDifference = function(arr) {
  let minDiv = Infinity
  let sortArr = [...new Set(arr)].sort((a, b) => a - b)

  let result = []

  for (let i = 0; i < sortArr.length; i++) {
    let curDiv = Math.abs(sortArr[i] - sortArr[i+1])
    if (curDiv < minDiv) {
      minDiv = curDiv
      if (minDiv === 1) break
    }
  }

  sortArr.forEach( ( _, i, arr ) => {
    if (Math.abs( arr[i] - arr[i+1] ) === minDiv) {
      result.push( [arr[i], arr[i+1]] )
    }
  })

  return result
}

console.log(minimumAbsDifference([4,2,1,3])) // [[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1,3,6,10,15])) // [[1,3]]
console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27])) // [[-14,-10],[19,23],[23,27]]
