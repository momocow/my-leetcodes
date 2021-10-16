/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold1 = -Infinity; // hold a stock, remain 1 transaction
    let sold1 = -Infinity; // sold a stock, remain 1 transaction
    let hold0 = -Infinity; // hold a stock, remain 0 transaction
    let sold0 = -Infinity; // sold a stock, remain 0 transaction
    for (let i = 0; i < prices.length; i++) {
        [hold1, sold1, hold0, sold0] = [
            Math.max(hold1, -prices[i]),
            Math.max(sold1, hold1 + prices[i]),
            Math.max(hold0, sold1 - prices[i]),
            Math.max(sold0, hold0 + prices[i])
        ];
    }
    return Math.max(0, hold1, sold1, hold0, sold0); // 0 for sold2
};

module.exports = maxProfit;
