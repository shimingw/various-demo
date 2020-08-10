const arr = require('./data').arr

const guibin = (arr) => {
  const len = arr.length
  if (len === 1) return arr
  const midIndex = len / 2
  //   将数组分为两步
  const left = arr.slice(0, midIndex)
  const right = arr.slice(midIndex)
  //   递归调用，最终数组被拆成只有一个值时，才会出栈
  return merge(guibin(left), guibin(right))
}

function merge(left, right) {
  // 合并两个有序数据
  const tempArr = []

  while (left.length > 0 && right.length > 0) {
    let val
    if (left[0] > right[0]) {
      val = right.shift()
    } else {
      val = left.shift()
    }
    tempArr.push(val)
  }
  tempArr.push(...(left.length > 0 ? left : right))
  return tempArr
}
console.log(guibin([5, 4, 3, 2, 1, 0]))
// https://github.com/hustcc/JS-Sorting-Algorithm