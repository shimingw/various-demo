/**
 * 堆是具有以下性质的完全二叉树：
 * 每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆；
 * 每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。
 * 一般升序采用大顶堆，降序采用小顶堆
 */
const arr = require('./data').arr
let len = arr.length // 因为声明的多个函数都需要数据长度，所以把len设置成为全局变量

function buildMaxHeap(arr) {
  // 建立大顶堆
  // 第一个非叶子节点是len/2-1

  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    // 查看该叶子节点下面的值是否比自己大，如果比自己，则交换位置
    heapify(arr, i)
  }
}

function heapify(arr, i) {
  const largest = getLargest(arr, i)
  if (largest !== i) {
    swap(arr, i, largest)
  }
}

function getLargest(arr, i) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let largest = i
  //   以下比较，每次赋值成功以后largest会变化
  // 所以取的是left和right之间的最大值
  if (left < len && arr[left] > arr[largest]) {
    largest = left
  }
  if (right < len && arr[right] > arr[largest]) {
    largest = right
  }
  return largest
}

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function heapSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // 构造大顶堆
    buildMaxHeap(arr)
    // 交换顶部和最后一位
    swap(arr, 0, i)
    // 长度-1，因为最后一位，已经确定是最大的。所以不需要在遍历
    len--
  }
  return arr
}

console.log(heapSort(arr))
