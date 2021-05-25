var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false

  var map = {}

  for (var i = 0; i < s.length; i++) {
    var a = s[i] 
    var b = t[i]

    if (typeof map[a] === "undefined") {
      map[a] = b
    } else if (map[a] !== b) {
      return false
    }

    for (var key in map) {
      if (key !== a && b === map[key]) {
        return false
      }
    }
  }

  
  return true;
};
console.log(isIsomorphic("qwertyuiop[]asdfghjkl;'\\zxcvbnm,./", "',.pyfgcrl/=aoeuidhtns-\\;qjkxbmwvz"))

console.log(isIsomorphic('egg','add'))
console.log(isIsomorphic('foo','bar'))
console.log(isIsomorphic('paper','title'))
console.log(isIsomorphic('bcba','baba'))