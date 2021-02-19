// Test.assertEquals(arraySum([1, 2]), 3);
// Test.assertEquals(arraySum([1, 2, 3]), 6);
// Test.assertEquals(arraySum([1, 2, [1, 2]]), 6);

function arraySum(arr) {
  let sum = 0;

  function foreacher(arr) {
    arr.forEach(elem => {
      if(Array.isArray(elem)){
        foreacher(elem)
      } else if(typeof elem === 'number') {
        sum = sum + elem;
      }
    })
  }

  foreacher(arr);

  return sum;
}

console.log(arraySum([1,'pig',[2,3]]))