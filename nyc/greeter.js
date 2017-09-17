var assert = require('assert')

function greeting (greet) {
  assert.equal(typeof greet, 'string')
  return function noun (thing) {
    assert.equal(typeof thing, 'string')
    return greet + ' ' + thing
  }
}

module.exports = greeting

