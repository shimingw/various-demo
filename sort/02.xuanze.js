const arr = require('./data').arr
const xuanze = (arr) => {
  const len = arr.length
  let minIndex, tmp

  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    tmp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = tmp
  }
  return arr
}

console.log(xuanze(arr))
