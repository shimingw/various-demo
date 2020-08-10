// 防抖，在wait秒后执行fn，如果再次被触发，则在等wait秒
function debounce(fn, wait = 0) {
  let timer
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, wait)
  }
}

// 节流，在wait时间内，最多触发一次
function throttle(fn, wait = 0) {
  let preTime
  return function () {
    if (preTime) {
      const gapTime = new Date() - preTime
      if (gapTime > wait) {
        preTime = new Date()
        fn()
      }
    } else {
      preTime = new Date()
      fn()
    }
  }
}

// const fn = debounce(function () {
//   console.log(111111111)
// }, 1000)
const fn = throttle(function () {
  console.log(111111111)
}, 2000)

setInterval(fn, 500)
