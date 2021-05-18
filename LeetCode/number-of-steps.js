var numberOfSteps = function(num) {
  let steps = 0  

  function checkEven(n) {
    return n % 2 === 0 ? true : false
  }

  while(num !== 0) {
    if (checkEven(num)) {
      num = num / 2
    } else {
      num--
    }
    steps++
  }

  return steps
};

console.log(numberOfSteps(8))