var reverseVowels = function(s) {
  const reg = new RegExp('[aeiou]', 'gi')
  const vowels = s.match(reg)
  const arr = s.split('')
  
  arr.forEach((elem, i) => {
    if (elem.match(reg) !== null) {
      arr.splice(i, 1, vowels.pop())
    }
  })

  return arr.join('')
};

console.log(reverseVowels("a.b,."))