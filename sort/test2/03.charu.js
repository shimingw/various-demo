const { arr, swap } = require('../data')

function charu(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1
    let currentVal = arr[i]
    while (currentVal < arr[preIndex] && preIndex >= 0) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = currentVal
  }
  return arr
}

console.log('charu', charu(arr))