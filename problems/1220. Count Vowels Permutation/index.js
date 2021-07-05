const MOD = 10 ** 9 + 7
const MOD_N = BigInt(10 ** 9 + 7)

function multiply (m1, m2) {
  const ret = new Array(m1.length)
  for (let i = 0; i < m1.length; i++) {
    ret[i] = new Array(m2.length).fill(0)
    for (let j = 0; j < m2.length; j++) {
      let sum = 0
      for (let k = 0; k < m2.length; k++) {
        const p = m1[i][k] * m2[k][j]
        const prod = p > Number.MAX_SAFE_INTEGER || p < Number.MIN_SAFE_INTEGER
          ? Number((BigInt(m1[i][k]) * BigInt(m2[k][j])) % MOD_N)
          : p % MOD

        sum = (sum + prod) % MOD
      }
      ret[i][j] = sum
    }
  }
  return ret
}

function Identity (len) {
  const ret = new Array(len)
  for (let i = 0; i < len; i++) {
    ret[i] = new Array(len).fill(0)
    ret[i][i] = 1
  }
  return ret
}

function fastPower (matrix, expo, cb) {
  if (expo === 0) {
    return Identity(Math.max(matrix.length, matrix[0].length))
  }
  if (expo === 1) {
    return matrix
  }
  if (expo % 2 === 0) {
    const m = fastPower(matrix, expo / 2)
    return multiply(m, m)
  }
  const m = fastPower(matrix, (expo - 1) / 2)
  return multiply(multiply(m, m), matrix)
}

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  const [[p1, p2, p3, p4]] = multiply(
    [[1, 0, 0, 0]],
    fastPower(
      [
        [1, 1, 0, 0],
        [1, 0, 1, 0],
        [0, 0, 1, 1],
        [2, 0, 0, -1]
      ],
      n - 1
    )
  )
  return (fix(p1) * 5 + fix(p2) * 5 + fix(p3) * 4 + fix(p4) * 2) % MOD
}

function fix (n) {
  return n < 0 ? (n + MOD) % MOD : n
}

module.exports = countVowelPermutation
