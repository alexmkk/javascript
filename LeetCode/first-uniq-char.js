var firstUniqChar = function(s) {
  let ind = -1
  
  for (let i = 0; i < s.length; i++) {
    if (s.match(new RegExp(s[i], 'g')).length === 1) {
      ind = i
      break;
    }
  }

  return ind
};

console.log(firstUniqChar('aabb'))