// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"

var restoreString = function(s, indices) {
    const result = Array(indices.length)

    s.split('').forEach((el, i) => {
      result[indices[i]] = el
    })

    return result.join('')
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))