const MOD = 1000000007n

function multiply (m1, m2) {
  const ret = new Array(m1.length)
  for (let i = 0; i < m1.length; i++) {
    ret[i] = new Array(m2.length).fill(0n)
    for (let j = 0; j < m2.length; j++) {
      let sum = 0n
      for (let k = 0; k < m2.length; k++) {
        sum = (sum + m1[i][k] * m2[k][j])
      }
      ret[i][j] = sum
    }
  }
  return ret
}

function Identity (len) {
  const ret = new Array(len)
  for (let i = 0; i < len; i++) {
    ret[i] = new Array(len).fill(0n)
    ret[i][i] = 1n
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
    [[1n, 0n, 0n, 0n]],
    fastPower(
      [
        [1n, 1n, 0n, 0n],
        [1n, 0n, 1n, 0n],
        [0n, 0n, 1n, 1n],
        [2n, 0n, 0n, -1n]
      ],
      n - 1
    )
  )
  return Number((p1 * 5n + p2 * 5n + p3 * 4n + p4 * 2n) % MOD)
}

module.exports = countVowelPermutation
