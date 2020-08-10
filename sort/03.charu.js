const arr = require('./data').arr
console.log(arr)

const charu = (arr) => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let preIndex = i - 1
    let current = arr[i]
    while (preIndex >= 0 && current < arr[preIndex]) {
      arr[preIndex+1] = arr[preIndex];
      // arr[preIndex] = current
      preIndex--
    }
    arr[preIndex+1] = current;
  }
  return arr
}

console.log(charu(arr))
