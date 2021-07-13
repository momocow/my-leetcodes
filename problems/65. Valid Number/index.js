function isDigit (c) {
  const code = c.charCodeAt(0)
  return code >= 48 && code <= 57
}

function isDigits (d) {
  if (d.length === 0) return false
  return Array.from(d).every(isDigit)
}

function isDecimal (s) {
  const parts = s.split('.')
  if (parts[0][0] === '+' || parts[0][0] === '-') {
    parts[0] = parts[0].slice(1)
  }
  return parts.length === 2 &&
    (parts[0] || parts[1]) &&
    (!parts[0] || isDigits(parts[0])) &&
    (!parts[1] || isDigits(parts[1]))
}

function isInteger (s) {
  if (s[0] === '+' || s[0] === '-') {
    s = s.slice(1)
  }
  return isDigits(s)
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const parts = s.split(/e/i)
  if (parts.length > 2) {
    return false
  }
  return (isDecimal(parts[0]) || isInteger(parts[0])) &&
    (typeof parts[1] === 'undefined' || isInteger(parts[1]))
}

module.exports = isNumber
