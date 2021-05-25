var isSubsequence = function(s, t) {
    if (s.length === 0) return true
  
    let sArr = s.split('')
    let tArr = t.split('')

    for (let i = 0; i < t.length; i++) {

      while(tArr.length >= sArr.length) {
        if (sArr[i] === tArr[i]) {
          break
        } else {
          tArr.splice(i, 1)
        }
      }
    }

    return sArr.join('') === tArr.join('')
}

console.log(isSubsequence('bbab', 'bbccsasdasb')) // true bbab = bbab

