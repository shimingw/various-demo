const setitl = function (fn, interval) {
  let timer
  function getTimer() {
    return timer
  }
  const loop = function (fn, interval) {
    return setTimeout(() => {
      fn()
      timer = loop(fn, interval)
    }, interval)
  }
  timer = loop(fn, interval)
  return getTimer
}
const timer = setitl(() => {
  console.log(1111111)
}, 2000)

setTimeout(() => {
  clearTimeout(timer())
}, 5000)
