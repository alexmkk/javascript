var ft2 = createArgumentMap(function(a1){},'a1 argvalue');

function createArgumentMap(func) {
  if (typeof func !== 'function') return []
  
  const f = func.toString()
  const args = f.slice(f.indexOf('(') + 1, f.indexOf(')')).replace(/\s/g, '') .split(',')  
  const map = {}
  
  if(args.length !== [...arguments].length - 1) return []

  args.forEach((val, ind, arr) => {
    map[val] = String([...arguments][ind + 1])
  })

  return args.join('').length !== 0 ? map : []
}



console.log(createArgumentMap(function(a1, a2){}, 'valueOfArg1'))

console.log(ft2['a1']);  // writes 'valueOfArg1'
// console.log(map['arg2']);  // writes 'valueOfArg2'