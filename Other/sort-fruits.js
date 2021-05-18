let words = ['banana', 'grapefruit', 'banana', 'grapefruit', 'banana', 'orange']

const sortFunction = arr => {
  const result = []
  
  const obj = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})

  return Object.entries(obj)
    .sort((a,b) => b[1] - a[1])
    .map(elem => elem[0])
}

console.log(sortFunction(words))