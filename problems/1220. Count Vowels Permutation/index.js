const MOD = 1000000007

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  let a = 1
  let e = 1
  let i = 1
  let o = 1
  let u = 1
  while (--n) {
    const aa = a
    const ee = e
    const ii = i
    const oo = o
    const uu = u
    a = (ee + ii + uu) % MOD
    e = (aa + ii) % MOD
    i = (ee + oo) % MOD
    o = (ii) % MOD
    u = (ii + oo) % MOD
  }
  return (a + e + i + o + u) % MOD
}

module.exports = countVowelPermutation
