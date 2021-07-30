const cache = {}

/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function (n) {
  if (n === 1) return [1]
  if (!(n in cache)) {
    cache[n] = beautifulArray(Math.floor((n + 1) / 2))
      .map(n => n * 2 - 1)
      .concat(
        beautifulArray(Math.floor(n / 2))
          .map(n => n * 2)
      )
  }
  return cache[n]
}

module.exports = beautifulArray
