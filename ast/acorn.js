var path = require('path')
var file = require('fs').readFileSync(path.join(__dirname, '/file.js'), 'utf8')

var ast = require('acorn').parse(file)
console.log(ast)
