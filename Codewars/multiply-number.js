// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
 // 1*2*6 = 12, and finally 1*2 = 2

// persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
  let multiply = 0;
  
  function counter(num) {   
    
    if (String(num).length === 1) return 0;
  
    let newNum = String(num).split('').reduce((total, elem) => elem * total);
    multiply++;
    return counter(newNum); 
  }
  counter(num);

  return multiply;
  
}

console.log(persistence(39));