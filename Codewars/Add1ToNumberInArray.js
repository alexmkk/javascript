// Test.assertSimilar(upArray([2,3,9]), [2,4,0]);
// Test.assertSimilar(upArray([4,3,2,5]), [4,3,2,6]);
// Test.assertSimilar(upArray([1,-9]), null);

// Expected: '[3, 5, 2, 6, 7, 6, 7, 4, 8, 4, 7, 5, 0, 9]', 
// inst got: '[3, 5, 2, 6, 7, 6, 7, 4, 8, 4, 7, 5, 1, 0]'

function upArray(arr){
  if (arr.length === 0) return null;

  let valid = arr.every(elem => {
    return elem >= 0 && elem < 10 && Number.isInteger(elem);
  })
   
  let i = arr.length - 1;
  let newArr = [...arr];

  function plusOne(i) {
    if (newArr[i] < 9) {
      newArr[i] += 1;
      return;
    }
    
    if(newArr[i] + 1 === 10) {
      newArr[i] = 0;
      return plusOne(i-1);
    } 
    if(newArr[i] === 10) {
      newArr[i-1] += 1;
      return plusOne(i-1);
    }

    if(newArr[i-1] === undefined) newArr.unshift(1);
    
    
  }
  plusOne(i);
  
  return valid ? newArr : null
}

// console.log(upArray([9,9,9]))
console.log(upArray([]))