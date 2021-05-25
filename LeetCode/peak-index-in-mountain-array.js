var peakIndexInMountainArray = function(arr) {
  let pick = 0
  for (let i = 0; i < arr.length; i++) {
    if (( (arr[i-1] || 0) < arr[i]) && ((arr[i+1] || 0) < arr[i] )) {
      pick = i
    }
  }

  return pick
}

console.log(peakIndexInMountainArray([0,1,0])) // 1
console.log(peakIndexInMountainArray([3,4,5,1])) // 1