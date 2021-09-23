/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const mid = (palindrome.length - 1) / 2
    let i = 0
    while (i < palindrome.length && (palindrome[i] === 'a' || i === mid)) i++
    if (palindrome.length === 1) return ''
    if (i === palindrome.length) return palindrome.slice(0, -1) + 'b'
    return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1)
};

module.exports = breakPalindrome
