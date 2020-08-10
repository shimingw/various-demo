const arr = require('../data').arr

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function charu(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentI = i
    let preI = i - 1
    let currentVal = arr[currentI]
    while (currentVal < arr[preI] && preI >= 0) {
      // preI的值向后移动一位
      //   值不会存在被覆盖的情况，因为被覆盖的值，已经通过currentVal保存了起来
      arr[preI + 1] = arr[preI]
      preI--
    }
    arr[preI + 1] = currentVal
  }
  return arr
}

console.log('charu', charu(arr))
