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
var isPalindrome = function (s, start = 0, end = s.length - 1) {
  if (start > end) return true
  if (!isAlphaNumeric(s[start])) {
    return isPalindrome(s, start + 1, end)
  }
  if (!isAlphaNumeric(s[end])) {
    return isPalindrome(s, start, end - 1)
  }
  if (s[start].toLowerCase() !== s[end].toLowerCase()) {
    return false
  }
  return isPalindrome(s, start + 1, end - 1)
}

module.exports = isPalindrome
