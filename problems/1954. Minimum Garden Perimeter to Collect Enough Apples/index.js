/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function (neededApples) {
  let a = 0
  let n = 0
  while (neededApples > 0) {
    a += 24 * ++n - 12
    neededApples -= a
  }
  return 8 * n
}

module.exports = minimumPerimeter
