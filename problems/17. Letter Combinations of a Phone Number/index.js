const M = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits, prefix = '', i = 0) {
    if (i >= digits.length) return prefix ? [prefix] : []
    let ans = []
    for (const c of M[digits[i]]) {
        ans = ans.concat(letterCombinations(digits, prefix + c, i + 1))
    }
    return ans
};

module.exports = letterCombinations
