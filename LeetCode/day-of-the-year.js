var dayOfYear = function(date) {
  let year = new Date(date).getFullYear()

  let start = new Date(`${year}-01-01`)
  let end = new Date(date)

  let result = Number((end - start) / 1000 / 60 / 60 / 24) + 1

  return result
}

console.log(dayOfYear("2019-01-09")) //9
console.log(dayOfYear("2019-02-10")) //41
console.log(dayOfYear("2003-03-01")) //60
console.log(dayOfYear("2004-03-01")) //61