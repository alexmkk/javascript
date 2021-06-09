var countConsistentStrings = function(allowed, words) {
  let set = new Set(allowed)

  return words.reduce((a, w) => {
    return w.split('').every(l => set.has(l)) ? ++a : a
  }, 0)
}

console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"])) //2
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"])) //7
console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"])) //4