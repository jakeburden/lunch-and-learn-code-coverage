var assert = require('assert')

module.exports = function (num, cb) {
  assert.equal(typeof num, 'number')
  assert.equal(typeof cb, 'function')

  setTimeout(function () {
    if (num % 3 === 0) cb('DO NOT')
    else cb(null, num * 3)
  }, 500)
}
