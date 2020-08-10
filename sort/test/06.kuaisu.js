const arr = require('../data').arr

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function kuaisu(arr, left, right) {
  const len = arr.length
  // left默认从0开始，right默认从末尾开始
  left = typeof left != 'number' ? 0 : left
  right = typeof right != 'number' ? len - 1 : right
  if (left < right) {
    const partitionIndex = partition(arr, left, right)
    // partitionIndex这个值就不需要动了
    kuaisu(arr, left, partitionIndex - 1)
    kuaisu(arr, partitionIndex + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  // 基准值
  let pivot = left
  //   基准值后一位
  let index = pivot + 1
  for (let i = index; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      //   如果小于基准值
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

console.log('kuaisu', kuaisu(arr))
