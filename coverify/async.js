function dates () {
  var i = 0
  return async function () {
    if (i++ === 3) return // log dates 3 times then quit
    await sleep(100)
    return String(Date.now())
  }
}

function sleep (time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}

module.exports = dates

