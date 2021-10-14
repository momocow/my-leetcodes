const dp = new Map();

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if (n === 0) return 0;
    if (dp.has(n)) return dp.get(n);
    const root = Math.floor(Math.sqrt(n));
    let ans = Infinity;
    for (let i = 1; i <= root; i++) {
        ans = Math.min(1 + numSquares(n - i ** 2), ans);
    }
    dp.set(n, ans);
    return ans;
};

module.exports = numSquares;
