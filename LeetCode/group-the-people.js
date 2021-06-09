var groupThePeople = function(groupSizes) {
  let result = []
  
  for (let i = 0; i < groupSizes.length; i++) {
    let flag = 0
    
    for (let j = result.length - 1; j >= 0; j--) {
      if (result[j] && result[j].length === groupSizes[i] && result[j].indexOf(null) !== -1) {
        let indNull = result[j].indexOf(null)
        result[j][indNull] = i
        flag = 1
      }
    }

    if (flag === 0) {
      result.push(Array(groupSizes[i]).fill(null))
      result[result.length - 1][0] = i
    }

  }

  return result
}

console.log(groupThePeople([3,3,3,3,3,1,3])) //[[5],[0,1,2],[3,4,6]] random order
console.log(groupThePeople([2,1,3,3,3,2])) //[[1],[0,5],[2,3,4]] rendom order