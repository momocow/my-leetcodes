/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    const mid = Math.floor(palindrome.length / 2)
    let i = 0
    while (i < mid && palindrome[i] === 'a') i++
    if (palindrome.length === 1) return ''
    if (i === mid) return palindrome.slice(0, -1) + 'b'
    return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1)
};

module.exports = breakPalindrome
