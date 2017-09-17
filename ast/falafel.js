var path = require('path')
var fs = require('fs')
var falafel = require('falafel')

var file = fs.readFileSync(path.join(__dirname, 'file.js'), 'utf8')

var counter = 0
var code = falafel(file, function walk (node) {
  if (node.type === 'VariableDeclarator' && node.init) {
    node.init.update('(__coverageWrap(' + counter++ + ')(' + node.init.source() + '))')
  }
})

console.log(code)
