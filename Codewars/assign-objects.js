

// extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
// extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
// extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
// extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}


var extend = function() {
  let args = [...arguments],
      obj = {}
  args.forEach(elem => {
    if (isObject(elem)) {
      for(let key in elem) {
        !(key in obj) ? obj[key] = elem[key] : null
      }
    }
  })
  
  return obj
}

console.log(extend( {a: false, b: null}, {a: true, b: 2, c: 3} ));
