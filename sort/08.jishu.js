const arr = require('./data').arr

function countingSort(arr, maxValue) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0,
    arrLen = arr.length,
    bucketLen = maxValue + 1

  // 将数组中的值，排列到bucket中
  // arr的值为数组的key，个数为该key对应的value
  for (var i = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }
  
  // 将bucket中的值再释放回arr中
  for (var j = 0; j < bucketLen; j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j
      bucket[j]--
    }
  }

  return arr
}

console.log(countingSort(arr, 8))
