const arr = require('./data').arr

const xier = (arr) => {
  // 先定义一个步长
  let gap = ~~(arr.length / 3)
  // 以这个步长进行插入排序
  // 每次排序完步长减半直到步长为1结束
  for (gap; gap > 0; gap = ~~(gap / 3)) {
    // 按gap间隔进行排序6
    for (let i = gap; i < arr.length; i++) {
      const tmp = arr[i]
      // 需要比较的上一个索引
      let preIndex = i - gap
      while (tmp < arr[preIndex] && preIndex >= 0) {
        //  如果上一个间隔比该间隔小即arr[i] < arr[preIndex]
        // 则将该值arr[preIndex]向后移动一位
        arr[preIndex + gap] = arr[preIndex]
        preIndex -= gap
      }
      // 直到当前值大于比较值，或者索引为0
      // 将当前值插入到该索引位置
      arr[preIndex + gap] = tmp
    }
  }
  return arr
}

console.log(xier(arr))
