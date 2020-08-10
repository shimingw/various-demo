const _ = require('lodash')

function curry(fn) {
  return function (...params) {
    const _this = this
    if (params.length < fn.length) {
      return curry(fn.bind(_this, ...params))
    } else {
      return fn.apply(_this, params)
    }
  }
}

const abc = function (a, b, c) {
  console.log(this)
  return [a, b, c]
}
const obj = { a: 12123 }
const curry_abc = curry(abc)
console.log(curry(abc).call(obj, 1, 2, 3))
