const MAX = 2 ** 31 - 1
const MIN = -(2 ** 31)

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let sign = 1
  let v = 0
  let step = 1
  for (let i = 0; i < s.length; i++) {
    if (step === 1) {
      if (s[i] !== ' ') step++
    }
    if (step === 2) {
      step++
      if (s[i] === '-') {
        sign = -1
        continue
      } else if (s[i] === '+') {
        continue
      }
    }
    if (step === 3) {
      const cc = s[i].charCodeAt()
      if (cc >= 48 && cc <= 57) { // digits
        v = v * 10 + cc - 48
      } else {
        step++
      }
    }
  }

  return Math.max(Math.min(sign * v, MAX), MIN)
}

module.exports = myAtoi
