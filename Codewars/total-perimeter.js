// ['XOOXO',
//  'XOOXO',
//  'OOOXO',
//  'XXOXO',
//  'OXOOO']

function landPerimeter(arr) {
  let perimeter = 0;

  arr.forEach((elem,i) => {
    
    elem.split('').forEach((b,j) => {
      
      if(b === 'X') {
        if(arr[i-1]){
          if(arr[i-1][j] !== 'X') perimeter += 1;
        } else {
          perimeter += 1;
        }
        if(elem[j-1] !== 'X') perimeter += 1;
        if(elem[j+1] !== 'X') perimeter += 1;
        if(arr[i+1]) {
          if(arr[i+1][j] !== 'X') perimeter += 1
        } else {
          perimeter += 1;
        }
      }
      
    })
  })
  return "Total land perimeter: " + perimeter;
}

console.log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]))