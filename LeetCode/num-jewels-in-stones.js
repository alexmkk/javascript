// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

var numJewelsInStones = function(jewels, stones) {
  let result = 0 
  
  jewels.split('').forEach(n => {
    result += stones.match(new RegExp(n, 'g')) !== null ? stones.match(new RegExp(n, 'g')).length : 0
  })

  return result
};

console.log(numJewelsInStones("z", "ZZ"))