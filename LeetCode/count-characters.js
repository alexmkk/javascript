var countCharacters = function(words, chars) {
  const result = []

  for (let i = 0; i < words.length; i++) {
    let checker = 0
    words[i].split('').forEach(letter => {
      if (words[i].match(new RegExp(letter, 'g')).length > (chars.match(new RegExp(letter,'g')) || []).length) {
        checker = 1
      }
    })
    if (checker === 0) result.push(words[i])
  }

  return result.reduce((acc, elem) => {
    return acc + elem.length
  }, 0)
}

console.log(countCharacters(["cat","bt","hat","tree"], "atach")) //6
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr")) //10