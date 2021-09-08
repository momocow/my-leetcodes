const A = 'a'.codePointAt()

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let ans = ''
    for (let i = shifts.length - 1; i >= 0; i--) {
        shifts[i] = shifts[i] + (shifts[i + 1] ?? 0)
        ans = String.fromCodePoint((s[i].codePointAt() - A + shifts[i]) % 26 + A) + ans
    }
    return ans
};

module.exports = shiftingLetters
