/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const arr = new Array(dominoes.length)
  let t = false
  let c = 0
  for (let i = 0; i < dominoes.length; i++) {
    if (t && dominoes[i] === '.') {
      c /= 2
    } else if (dominoes[i] === 'R') {
      t = true
      c = 1
    } else {
      t = false
      c = 0
    }
    arr[i] = c
  }
  t = false
  c = 0
  for (let j = dominoes.length - 1; j >= 0; j--) {
    if (t && dominoes[j] === '.') {
      c /= 2
    } else if (dominoes[j] === 'L') {
      t = true
      c = 1
    } else {
      t = false
      c = 0
    }
    arr[j] -= c
  }
  return arr.map(n => n > 0 ? 'R' : n < 0 ? 'L' : '.').join('')
}

module.exports = pushDominoes
