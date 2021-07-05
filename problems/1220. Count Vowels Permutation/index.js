const MOD = 1000000007

/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function (n) {
  let p1 = 1 // aeiou
  let p2 = 0 // aaeiu
  let p3 = 0 // aaee
  let p4 = 0 // ii
  while (--n) {
    const pp1 = p1
    const pp2 = p2
    const pp3 = p3
    const pp4 = p4
    p1 = (pp1 + pp2 + 2 * pp4) % MOD
    p2 = pp1
    p3 = (pp2 + pp3) % MOD
    p4 = (pp3 - pp4 + MOD) % MOD
  }
  return (p1 * 5 + p2 * 5 + p3 * 4 + p4 * 2) % MOD
}

module.exports = countVowelPermutation
