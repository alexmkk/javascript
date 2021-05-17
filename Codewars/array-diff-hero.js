function array_diff_very_fast(a, b) {
  const newArr = []
  const newB = [...new Set(b)]
  a.map(el => {
    if (!newB.includes(el)) {
      newArr.push(el)
    }
  })
 return newArr
 
}

console.log(array_diff_very_fast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]))