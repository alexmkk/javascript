var longestCommonPrefix = function(strs) {
  let smallWord = strs.sort((a, b) => a.length - b.length)[0]
  let prefix = ''
  
  function checkPrefixArray(arr, prefix) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, prefix.length) !== prefix) {
        return false
      }
    }
    return true
  }

  for (let i = 1; i <= smallWord.length; i++) {
    if (!checkPrefixArray(strs, smallWord.substr(0, i))) {
      break
    } else {
      prefix = smallWord.substr(0, i)
    }
  }

  return prefix
};

console.log(longestCommonPrefix(["a"]))