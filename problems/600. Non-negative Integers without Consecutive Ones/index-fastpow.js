// 30 bits at max (10**9)
const MASKS = [
  1,
  2,
  4,
  8,
  16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536,
  131072,
  262144,
  524288,
  1048576,
  2097152,
  4194304,
  8388608,
  16777216,
  33554432,
  67108864,
  134217728,
  268435456,
  536870912
]

const FIB_CACHE = new Map()
const I22 = Identity(2)

function countBits (n) {
  let i = 0
  while (true) {
    if (!n) {
      return i
    }
    n >>= 1
    i++
  }
}

function multiply (m1, m2) {
  const ret = new Array(m1.length)
  for (let i = 0; i < m1.length; i++) {
    ret[i] = new Array(m2.length).fill(0)
    for (let j = 0; j < m2.length; j++) {
      let sum = 0
      for (let k = 0; k < m2.length; k++) {
        sum += m1[i][k] * m2[k][j]
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

function fastPower (matrix, expo) {
  if (expo === 0) {
    return I22
  }
  if (expo === 1) {
    return matrix
  }
  let ret = FIB_CACHE.get(expo)
  if (ret !== undefined) return ret
  if (expo % 2 === 0) {
    const m = fastPower(matrix, expo / 2)
    ret = multiply(m, m)
  } else {
    const m = fastPower(matrix, (expo - 1) / 2)
    ret = multiply(multiply(m, m), matrix)
  }
  FIB_CACHE.set(expo, ret)
  return ret
}

function fibonacci (iters) {
  return multiply([[1, 1]], fastPower([[1, 1], [1, 0]], iters))[0][1]
}

function getBit (n, ith) {
  return n & (MASKS[ith] ?? Math.pow(2, ith))
}

function countOverplus (n, bits) {
  let op = 0
  for (let i = bits - 2; i >= 0; i--) {
    if (getBit(n, i) === 0 && getBit(n, i + 1) === 0) {
      op += fibonacci(i)
    } else if (getBit(n, i) !== 0 && getBit(n, i + 1) !== 0) {
      break
    }
  }
  return op
}

/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
  const bits = countBits(n)
  return fibonacci(bits + 1) - countOverplus(n, bits)
}

module.exports = findIntegers
