// [4, 5, 6, 0, 1, 2] k = 3

let nums = [4,5,6,7,0,1,2]

let search = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

  }

  return -1
}

console.log(search(nums, 1))
console.log(search(nums, 3))