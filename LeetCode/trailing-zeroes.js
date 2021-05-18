// Input: n = 5
// Output: 1
// Explanation: 5! = 120, one trailing zero.

var trailingZeroes = function(n) {
  let numZeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
      numZeroes += Math.floor(n / i);
  }
  return numZeroes;
};

console.log(trailingZeroes(30))