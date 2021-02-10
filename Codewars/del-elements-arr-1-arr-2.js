// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter(elem => {
    return b.indexOf(elem) == -1
  })
}

console.log(arrayDiff([], [4,5]))