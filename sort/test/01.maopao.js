const arr = require('../data').arr

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
/**
 * 遍历数组
 * 将第一个值与第二个值进行比较，如果第一个值比第二个值大则交换位置
 * =》将第二个值与第三个比较，如果第二个值比第三个值大则交换位置
 * 以此类推，直到遍历到最后一位。当数组第一次遍历完以后。最大值会排在最后一位
 * 所以遍历n次，比较n个值以后数组完成排序
 * 时间复杂度为O(n2)
 * 优化:
 * 1、因为每次遍历的时候，最后一位都是最大的，所以，每次遍历数组的时候，长度可以-1
 * 2、当某次遍历，都没有发生位置交换，则表示这个数据已经是有序了的，可以跳出循环
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
