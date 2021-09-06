/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, close = 0) {
    if (n < 0 || close < 0) return []
    if (n === 0 && close === 1) return [')']
    return []
        .concat(
            generateParenthesis(n - 1, close + 1).map(s => '(' + s)
        )
        .concat(
            generateParenthesis(n, close - 1).map(s => ')' + s)
        )
};

module.exports = generateParenthesis
