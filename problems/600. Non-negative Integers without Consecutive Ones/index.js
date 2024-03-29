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

function fibonacci (iters) {
  if (iters === 0) return 1
  if (iters === 1) return 1
  let ret = FIB_CACHE.get(iters)
  if (ret !== undefined) return ret
  ret = fibonacci(iters - 1) + fibonacci(iters - 2)
  FIB_CACHE.set(iters, ret)
  return ret
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
