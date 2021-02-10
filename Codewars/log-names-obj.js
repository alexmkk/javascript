// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

function list(names){
  let str = "";
  if (names.length === 1) return names.name;

  for(let i=0; i<names.length; i++) {
    if(i === names.length - 1) {
      str += ' & ';
    } 
    if(i !== 0 && i !== names.length - 1) {
      str += ', ';
    }
    str += names[i].name
  }
  return str;
}

// console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))
console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))