/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sold = 0; // stock sold and not in cooldown
    let hold = -prices[0]; // hold a stock
    let cooldown = 0; // stock sold and in cooldown
    for (let i = 1; i < prices.length; i++) {
        [sold, hold, cooldown] = [
            Math.max(sold, cooldown),
            Math.max(hold, sold - prices[i]),
            hold + prices[i]
        ];
    }
    return Math.max(sold, hold, cooldown);
};

module.exports = ;
