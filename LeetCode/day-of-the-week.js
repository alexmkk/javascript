var dayOfTheWeek = function(day, month, year) {
  let d = String(day).padStart(2,0)
  let m = String(month).padStart(2,0)
  let date = new Date(`${year}-${m}-${d}`)

  let days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }

  return days[date.getUTCDay()]
}

console.log(dayOfTheWeek(31,8,2019)) //Saturday
console.log(dayOfTheWeek(18,7,1999)) //Sunday
console.log(dayOfTheWeek(15,8,1993)) //Sunday