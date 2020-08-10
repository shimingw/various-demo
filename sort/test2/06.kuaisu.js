const { arr, swap } = require('../data')
console.log(arr)

function kuaisu(arr, left, right) {
  let partitionIndex
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : arr.length - 1
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    kuaisu(arr, left, partitionIndex - 1)
    kuaisu(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  let pivot = left,
    index = pivot + 1
  // 因为right是最后一位索引，也需要比较，所以是小于等于
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, index - 1, pivot)
  return index - 1
}

console.log('kuaisu', kuaisu(arr))
