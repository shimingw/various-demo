const arr = [111, 12, 8, 7, 6, 5, 4, 3, 2, 1]
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

exports.arr = arr
exports.swap = swap
