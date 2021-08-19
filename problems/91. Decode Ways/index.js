function canDecodeAlone (s, i) {
  return s[i] !== '0' && s[i + 1] !== '0'
}

function canDecodePairwise (s, i) {
  const ss = s.slice(i, i + 2)
  return ss >= '10' && ss <= '26'
}

function validate (s, i) {
  return s[i] !== '0' || s[i - 1] === '1' || s[i - 1] === '2'
}

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  let a = 1
  let b = 0
  for (let i = 0; i < s.length; i++) {
    if (!validate(s, i)) return 0;
    [a, b] = [a * canDecodeAlone(s, i) + b, a * canDecodePairwise(s, i)]
  }
  return a
}

module.exports = numDecodings
