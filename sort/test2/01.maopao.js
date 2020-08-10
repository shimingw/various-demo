const { arr, swap } = require('../data')

/**
 * 时间负责度O(n2)
 * 空间负责度O(1)
 * 稳定-因为每次冒泡的时候，只有比后一位大才会交换
 */
function maopao(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

console.log(maopao(arr))
