function isAlphaNumeric (c) {
  const code = c.charCodeAt(0)
  return (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  for (let start = 0, end = s.length - 1; start <= end; start++, end--) {
    while (start < s.length && !isAlphaNumeric(s[start])) {
      start++
    }
    while (end >= 0 && !isAlphaNumeric(s[end])) {
      end--
    }
    if (start > end) {
      break
    }
    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false
    }
  }
  return true
}

module.exports = isPalindrome
