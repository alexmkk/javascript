// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

var maximumWealth = function(accounts) {
  const arraySum = []
  
  function sum(arr) {
    return arr.reduce((sum, elem) => {
      return sum + elem
    }, 0)
  }

  accounts.forEach(acc => {
    arraySum.push(sum(acc))
  })

  return Math.floor(Math.max(...arraySum))

};


console.log(maximumWealth([[1,2,3],[3,2,1]]))