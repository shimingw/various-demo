const arr = require('../data').arr

function xier(arr) {
  let gap = 1
  while (gap < arr.length) {
    // 动态定义间隔序列，能取到最大步长
    // 并且保证gap可以缩小到1
    gap = gap * 3 + 1
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    // 通过步长来进行一个粗略的插入排序，最终gap会等于1
    for (let i = gap; i < arr.length; i += gap) {
      // 这里的逻辑和插入排序一样，只不过步长值为gap
      const currentVal = arr[i]
      let preIndex = i - gap
      while (currentVal < arr[preIndex] && preIndex >= 0) {
        arr[preIndex + gap] = arr[preIndex]
        preIndex -= gap
      }
      arr[preIndex + gap] = currentVal
    }
  }
  return arr
}

console.log('xier', xier(arr))
