var test = require('tape')

var greeter = require('../greeter')
var callback = require('../callback')
var asyncFunc = require('../async')

test('greeter', function (t) {
  t.plan(3)
  var hello = greeter('hello')
  t.equal(typeof hello, 'function')

  var world = hello('world')
  t.equal(typeof world, 'string')
  t.equal(world, 'hello world')
})

test('callback', function (t) {
  t.plan(4)
  callback(5, function (err, data) {
    t.ifError(err, err)
    t.equal(data, 15)
  })

  callback(3, function (err, data) {
    t.equal(err, 'DO NOT')
    t.equal(typeof data, 'undefined')
  })
})


test('async', function (t) {
  dateStream()

  async function dateStream () {
    var data
    var read = asyncFunc()
    t.equal(typeof read, 'function')

    while (data = await read()) {
      t.equal(typeof data, 'string')
      console.log(data)
    }
    t.end()
  }
})

