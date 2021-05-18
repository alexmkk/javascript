var singleNumber = function(nums) {
  const obj = {}

  nums.forEach(elem => {
    obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] = 1
  })

  return +Object.entries(obj).filter(elem => elem[1] === 1)[0][0]
};

console.log(singleNumber([4,1,2,1,2]))