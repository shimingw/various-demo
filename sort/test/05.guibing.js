const arr = require('../data').arr

function guibing(arr) {
  // 将数组二等分
  const len = arr.length
  if (len == 1) return arr
  const lArr = arr.slice(0, len / 2)
  const rArr = arr.slice(len / 2, len)
  return merge(guibing(lArr), guibing(rArr))
}

function merge(lArr, rArr) {
  const tmp = []
  while (lArr.length > 0 && rArr.length > 0) {
    if (lArr[0] < rArr[0]) {
      tmp.push(lArr.shift())
    } else {
      tmp.push(rArr.shift())
    }
  }
  tmp.push(...(lArr.length == 0 ? rArr : lArr))
  return tmp
}

console.log('guibing', guibing(arr))
