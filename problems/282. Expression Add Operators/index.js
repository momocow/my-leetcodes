function add (prev, n) { return prev + n }

function subtract (prev, n) { return prev - n }

function multiply (prev, n, lastOperand) { return prev + lastOperand * (n - 1) }

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target, prefix = '', value = 0, last = 0) {
    let ans = []
    for (let i = 1; i <= num.length && (num[0] !== '0' || i === 1); i++) {
        const p = num.slice(0, i)
        const q = num.slice(i)
        const r = Number(p)
        const k = prefix ? [
            [prefix + '+' + p, add(value, r), r],
            [prefix + '-' + p, subtract(value, r), -r],
            [prefix + '*' + p, multiply(value, r, last), last * r]
        ] : [ [p, r, r] ]
        if (q) {
            ans = ans.concat(
                k.map(([s, v, l]) => addOperators(q, target, s, v, l)).flat()
            )
        } else {
            ans = ans.concat(
                k.filter(kk => kk[1] === target).map(kk => kk[0])
            )
        }
    }
    return ans
};

module.exports = addOperators
