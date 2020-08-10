const arr = require('../data').arr

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function jishu(arr) {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        if(!map[arr[i]]){
            map[arr[i]] = 0
        }
        map[arr[i]]++
    }
    let index = 0
    for (const key in map) {
        while (map[key]>0) {
            arr[index] = key
            index++
            map[key]--
        }
    }
  return arr
}


console.log('jishu', jishu(arr))
