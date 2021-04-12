// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.

function smallestCommons(arr) {
  let max = Math.max(...arr)
  let newArr = []

  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    newArr.push(i)
  }

  function check(newArr, max) {
    return newArr.every(elem =>  max % elem === 0)
  }
 
  while (!check(newArr, max)) {
    max++
  }

  return max
}


console.log(smallestCommons([2, 10]))
