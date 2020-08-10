const arr = require('./data').arr

//LSD Radix Sort
function radixSort(arr) {
  const counter = []
  // 获取数组中的最大值
  // 这个值决定了数据需要循环几次
  // 第一次按个位排序
  // 第二次按十位排序
  // 以此类推，知道将最大值排序完成
  const maxVal = Math.max(...arr)
  // mod:取某个值的模
  // dev:为了取一个数字中某一位的值
  for (let mod = 10, dev = 1; dev / 10 < maxVal; dev *= 10, mod *= 10) {
    // 将arr中的值按照某个位的值，排列到counter中
    for (let i = 0; i < arr.length; i++) {
      const key = parseInt((arr[i] % mod) / dev)
      if (counter[key] === undefined) {
        counter[key] = []
      }
      counter[key].push(arr[i])
    }
    var pos = 0
    // 将counter中的值，放回到arr中
    // 第一次放回完成后，10以内的数，就变得有序了
    // 第一次放回完成后，100以内的数，就变得有序了
    // 以此类推
    for (let j = 0; j < counter.length; j++) {
      if (counter[j] != undefined) {
        while (counter[j].length > 0) {
          const val = counter[j].shift()
          arr[pos] = val
          pos++
        }
      }
    }
  }
  return arr
}

console.log(radixSort(arr))
