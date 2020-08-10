const arr = require('./data').arr

function quickSort(arr, left, right) {
  var len = arr.length,
    partitionIndex,
    // left默认从0开始，right默认从末尾开始
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right

  // 当递归到只有一个数的时候表示位置已经确定，不要变化了
  if (left < right) {
    // 获取基准值的索引
    // 并将数组按照基准值左侧都小于，右侧都大于的状态排列
    partitionIndex = partition(arr, left, right)
    // 取中位值的左侧和右侧继续递归操作，中位数的位置已经不需要变化了
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  // 操作的是同一个数组，所以最后只要把这个数组return出来
  return arr
}

function partition(arr, left, right) {
  // 分区操作
  var pivot = left, // 设定基准值（pivot）
    // 小于基准的索引，只有当发现有值小于基准才会与其交换
    // 这样保证，基准左边的值比基准都要小
    // 从基准的右侧取第一个值
    index = pivot + 1
  for (var i = index; i <= right; i++) {
    // 获取基准值和与基准比较的值
    if (arr[i] < arr[pivot]) {
      // i为从左开始，当前遍历到的点
      // index 为基准值的后一位
      // 如果小于基准值，则交换i，与index的位置
      swap(arr, i, index)
      index++
    }
  }
  // 最后将基准与最后一位找到的小于基准的值进行交换
  // 这样交换以后，就能保证基准值左侧的值，全部小于基准值
  // 基准值右侧的值，全部大于基准值
  swap(arr, pivot, index - 1)
  return index - 1
}
// 进行数组的索引交换
function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
console.log(quickSort(arr))
