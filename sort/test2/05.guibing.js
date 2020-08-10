const { arr, swap } = require('../data')

function guibing(arr) {
  if(arr.length===1)return arr
  const lArr = arr.slice(0,arr.length/2)
  const rArr = arr.slice(arr.length/2,arr.length)
  return merge(guibing(lArr),guibing(rArr))
}

function merge(lArr, rArr) {
  const tempArr = []
  console.log(lArr, rArr);
  while (lArr.length>0&&rArr.length>0) {
    let val;
    if (lArr[0] > rArr[0]) {
      val = rArr.shift();
    } else {
      val = lArr.shift();
    }
    tempArr.push(val);
  }
  tempArr.push(...(lArr.length > 0 ? lArr : rArr))
  return tempArr
}

console.log('guibing', guibing(arr))
