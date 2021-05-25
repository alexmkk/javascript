var lemonadeChange = function(bills) {
  let cash = {
    "5": 0,
    "10": 0,
    "20": 0
  }

  for (let i = 0; i < bills.length; i++) {
    cash[bills[i]] += 1

    if (bills[i] === 10) cash['5']--

    if (bills[i] === 20) {
      if (cash['10'] > 0) {
        cash['10']--
        cash['5']--
      } else {
        cash['5'] += -3
      }
    }
    
    if (cash['5'] < 0 || cash['10'] < 0 || cash['20'] < 0) {
      return false
    }
  }
  
  return true
}

console.log(lemonadeChange([5,5,5,10,20])) // true
console.log(lemonadeChange([5,5,10])) // true
console.log(lemonadeChange([10,10])) // false
console.log(lemonadeChange([5,5,5,10,5,5,10,20,20,20])) // false
console.log(lemonadeChange([5,5,10,20,5,5,5,5,5,5,5,5,5,10,5,5,20,5,20,5])) // true