// Test.assertEquals(minimumNumber([3,1,2]),1);
// Test.assertEquals(minimumNumber([5,2]),0);
// Test.assertEquals(minimumNumber([1,1,1]),0);
// Test.assertEquals(minimumNumber([2,12,8,4,6]),5);
// Test.assertEquals(minimumNumber([50,39,49,6,17,28]),2);

function minimumNumber(numbers){
  let sum = numbers.reduce((sum, current) => {
    return sum += current;
  })

  function isPrime(num) {
    let i = 2;
    while(i<num) {
      if(num % i === 0) return false;
      i++;
    }
    return true;
  }

  let count = 0;

  while(!isPrime(sum)) {
    isPrime(sum);
    sum++;
    count++;
  }

  return count

}

console.log(minimumNumber([2,12,8,4,6]))