var buddyStrings = function (a, b) {
  if (a.length != b.length) {
    return false;
  }

  if (a == b) {
    let s = new Set();

    for (let i = 0; i < a.length; i++) {
      s.add(a.charAt(i));
    }

    return s.size < a.length;
  }

  let diff = [];
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) != b.charAt(i)) {
      diff.push(i);
    }
  }

  return diff.length == 2 && a.charAt(diff[0]) == b.charAt(diff[1]) && a.charAt(diff[1]) == b.charAt(diff[0]);
}

console.log(buddyStrings("ab", "ab")) // false
console.log(buddyStrings("aaaaaaabc", "aaaaaaacb")) //true