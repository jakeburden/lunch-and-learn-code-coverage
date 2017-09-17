var hello = greeting('hello')
var world = hello('world')

console.log(world)

function greeting (greet) {
  return function noun (thing) {
    return greet + ' ' + thing
  }
}
