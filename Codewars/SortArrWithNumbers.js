// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

function order(words){
  let arr = words.split(' ');
  let newArr = [];

  arr.forEach(elem => {
    newArr[+elem.match(/[1-9]/gi)] = elem;
  })

  return newArr.join(' ').trim();
}

console.log(order('4of Fo1r pe6ople g3ood th5e the2'));