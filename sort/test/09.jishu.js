const arr = require('../data').arr

function jishu(arr) {
  const maxValue = Math.max(...arr)
  const bucket = []

  for (let dev = 10, mod = 1; dev / 10 < maxValue; dev *= 10, mod *= 10) {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
      const num = Math.floor((arr[i] % dev) / mod)
      if (!bucket[num]) {
        bucket[num] = []
      }
      bucket[num].push(arr[i])
    }
    for (let i = 0; i < bucket.length; i++) {
      const element = bucket[i]
      while (element && element.length) {
        arr[index] = element.shift()
        index++
      }
    }
  }
  return arr
}

console.log('jishu', jishu(arr))