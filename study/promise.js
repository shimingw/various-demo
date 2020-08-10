function newPromise(callBack) {
  this.data = undefined
  this.status = undefined
  this.cbs = []
  this.catchFn = undefined
  this.finallyFn = undefined
  this.finishFn = undefined
  this.resolve = (data) => {
    this.data = data
    this.status = 'resolve'
    setTimeout(() => {
      if (this.cbs.length === 0) {
        this.status = 'finish'
        this.finallyFn && this.finallyFn.call({})
        this.finishFn && this.finishFn.call({})
        return
      }
      this.data = this.cbs.shift().call({}, this.data)
      this.resolve(this.data)
    }, 0)
  }
  this.reject = (data) => {
    this.data = data
    this.status = 'reject'
    setTimeout(() => {
      this.catchFn && this.catchFn.call({}, this.data)
      setTimeout(() => {
        this.status = 'finish'
        this.finallyFn && this.finallyFn.call({})
        this.finishFn && this.finishFn.call({})
      }, 0)
    }, 0)
  }
  try {
    callBack.call({}, this.resolve, this.reject)
  } catch (error) {
    this.status = 'reject'
    this.reject(error)
  }
}

newPromise.prototype.then = function (cb) {
  this.cbs.push(cb)
  return this
}
newPromise.prototype.catch = function (cb) {
  this.catchFn = cb
  return this
}
newPromise.prototype.finally = function (cb) {
  this.finallyFn = cb
  return this
}
newPromise.prototype.finish = function (cb) {
  this.finishFn = cb
  return this
}
newPromise.all = function (promises) {
  return new newPromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.finish(() => {
        const data = []
        let isBreak = false
        for (const iterator of promises) {
          if (iterator.status !== 'finish') {
            isBreak = true
            break
          }
        }
        if (!isBreak) {
          const data = promises.map((promise) => promise.data)
          resolve(data)
        }
      })
    })
  })
}

// new newPromise((resolve, reject) => {
//   resolve(111111)
// })
//   .then((data) => {
//     console.log('resolve1', data)
//     return 22222222
//   })
//   .then((data) => {
//     console.log('resolve2', data)
//     return 3333333
//   })
//   .catch((e) => {
//     console.log('reject', e)
//   })
//   .finally((data) => {
//     console.log(this)
//     console.log('finally', data)
//   })

const promise1 = new newPromise((resolve, reject) => {
  resolve(1)
})
  .then((data) => {
    console.log(data)
    return data + 1
  })
  .catch((e) => {
    console.log('catch', 1, e)
  })
  .finally(() => {
    console.log('finally')
  })

const promise2 = new newPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('a')
  }, 2000)
})
  .then((data) => {
    console.log(data)
    return data + 1
  })
  .catch((e) => {
    console.log('catch', 'a', e)
  })

// const promise2 = new newPromise((resolve, reject) => {
//   resolve('promise2')
// })

newPromise.all([promise1, promise2]).then((data) => {
  console.log(data)
})
