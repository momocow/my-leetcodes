const MOD = 10 ** 9 + 7

function plus (a, b) {
  return (a + b) % MOD
}

function minus (a, b) {
  return plus(a, -b)
}

function multiply (a, b) {
  let res = 0
  while (b > 0) {
    const r = b % 2
    if (r === 1) {
      res = (res + a) % MOD
    }
    a = (a * 2) % MOD
    b = (b - r) / 2
  }
  return res
}

module.exports = {
  plus, minus, multiply
}
