// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.

function zipWith(fn, a0, a1) {
  let newArr = [];
  let minLength = Math.min(a0.length, a1.length);

  for (let i=0; i<minLength; i++) {
    newArr.push(fn(a0[i], a1[i]));
  }
  
  return newArr;
}

console.log(zipWith(  Math.pow, [10,10,10,10], [0,1,2,3] ))