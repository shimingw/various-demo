const arr = require('../data').arr

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function xuanze(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}

console.log(xuanze(arr))
