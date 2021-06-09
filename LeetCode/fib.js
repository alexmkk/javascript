// 0 1 1 2 3 5 8 13 21

var fib = function(n) {
  let fibArr = [0, 1]
  if (n === 0) return 0
  if (n === 2) return 1

  for (let i = 2; i <= n; i++) {
    fibArr.push(fibArr[i-1] + fibArr[i-2])
  }

  return fibArr[n]
  
}

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
