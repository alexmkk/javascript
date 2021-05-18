
let inc = (function(){
  let counter = 0
  return function() {
    return ++counter
  }
})()

inc()
inc()
inc()