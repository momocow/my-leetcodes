const MOD = 10 ** 9 + 7

const TWENTIES = new Set(['1', '2', '3', '4', '5', '6']) // 0 special case

const M1 = [[0, 0], [1, 0]]
const M2 = [[1, 0], [1, 0]]
const M3 = [[1, 1], [1, 0]]
const M4 = [[1, 6], [1, 0]]
const M5 = [[1, 9], [1, 0]]
const M6 = [[0, 2], [1, 0]]
const M7 = [[9, 1], [1, 0]]
const M8 = [[9, 2], [1, 0]]
const M9 = [[9, 15], [1, 0]]
const M10 = [[0, 1], [1, 0]]

function multiply (m1, m2) {
  const ret = new Array(m1.length)
  for (let i = 0; i < m1.length; i++) {
    ret[i] = new Array(m2[0].length).fill(0)
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0
      for (let k = 0; k < m2.length; k++) {
        sum = (sum + m1[i][k] * m2[k][j]) % MOD
      }
      ret[i][j] = sum
    }
  }
  return ret
}

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === '0') return 0

  /**
   * [C(n-1), C(n-2)][], where C(n) is the coefficient of F(n)
   * @type {[number, number][]}
   */
  const coef = []
  for (let i = 0; i < s.length - 1; i++) {
    // validation
    if (
      s[i] !== '1' &&
      s[i] !== '2' &&
      s[i] !== '*' &&
      s[i + 1] === '0'
    ) return 0

    let mtx
    if (s[i] === '*') {
      mtx = s[i + 1] === '*'
        ? M9
        : s[i + 1] === '0'
          ? M6
          : TWENTIES.has(s[i + 1])
            ? M8
            : M7
    } else if (s[i] === '0' && s[i + 1] !== '0') {
      mtx = M1
    } else if (s[i] === '1') {
      mtx = s[i + 1] === '*' ? M5 : s[i + 1] === '0' ? M10 : M3
    } else if (s[i] === '2') {
      mtx = s[i + 1] === '*'
        ? M4
        : TWENTIES.has(s[i + 1])
          ? M3
          : s[i + 1] === '0'
            ? M10
            : M2
    } else {
      mtx = M2
    }
    coef.push(mtx)
  }
  const last = s.slice(-1)
  let prod = [[last === '*' ? 9 : last === '0' ? 0 : 1], [1]]
  while (coef.length > 0) {
    prod = multiply(coef.pop(), prod)
  }

  return prod[0][0]
}

module.exports = numDecodings
