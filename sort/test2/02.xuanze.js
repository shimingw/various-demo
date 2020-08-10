const { arr, swap } = require('../data')

/**
 * 时间负责度O(n2)
 * 空间负责度O(1)
 * 不稳定-因为选择排序会从第一位开始，往后找，找一位最小的值，与该值进行调换，所以当该场景下，稳定性就会被破坏，序列 5 8 5 2 9，我们知道第一遍选择第 1 个元素 5 会和 2 交换，那么原序列中 2 个 5 的相对前后顺序就被破坏了
 */
function xuanze(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, minIndex, i)
  }
  return arr
}

console.log(xuanze(arr))
