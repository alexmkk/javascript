var reverseParentheses = function(s) {
  let sArr = s.split('')

  while(sArr.indexOf('(') !== -1) {
    let indLeft = 0
    let indRight = 0
    for (let i = 0; i < sArr.length; i++) {
      if(sArr[i] === '(') {
        indLeft = i
      }
      if(sArr[i] === ')') {
        indRight = i
        break
      }
    }
    
    let str = sArr.join('')

    sArr = String(str.substring(0, indLeft) + str.substring(indLeft + 1, indRight).split('').reverse().join('') + str.substring(indRight + 1)).split('')
  }

  return sArr.join('')
}

console.log(reverseParentheses("(abcd)")) //dcba
console.log(reverseParentheses("(u(love)i)")) //iloveu
console.log(reverseParentheses("(ed(et(oc))el)")) //leetcode
console.log(reverseParentheses("a(bcdefghijkl(mno)p)q")) //apmnolkjihgfedcbq
console.log(reverseParentheses("ta()usw((((a))))")) //tauswa
