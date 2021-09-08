const S = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
const V = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let ans = ''
    let i = V.length - 1
    while (num > 0) {
        if (num >= V[i]) {
            ans += S[i].repeat(Math.floor(num / V[i]))
            num %= V[i]
        } else {
            i--
        }
    }
    return ans
};

module.exports = intToRoman
