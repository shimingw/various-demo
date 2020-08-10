const arr = require('../data').arr

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function tong(arr) {
  if (arr.length === 0) {
    return arr
  }

  var i
  var minValue = arr[0]
  var maxValue = arr[0]
  for (i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i] // 输入数据的最小值
    } else if (arr[i] > maxValue) {
      maxValue = arr[i] // 输入数据的最大值
    }
  }

  console.log(minValue,maxValue);
  
  return arr
}

console.log('tong', tong(arr))
