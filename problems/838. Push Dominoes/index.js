/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  const arr = Array.from(dominoes)
  let r = new Set()
  let l = new Set()
  do {
    for (const i of r) {
      arr[i] = 'R'
    }
    for (const i of l) {
      arr[i] = 'L'
    }
    r = new Set()
    l = new Set()

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '.') {
        if (arr[i - 1] === 'R' && arr[i + 1] !== 'L') {
          r.add(i)
        } else if (arr[i - 1] !== 'R' && arr[i + 1] === 'L') {
          l.add(i)
        }
      }
    }
  } while (r.size + l.size > 0)
  return arr.join('')
}

module.exports = pushDominoes
