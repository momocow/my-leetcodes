/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function(s) {
    let dp = 0;
    let count0 = 0;
    let sum0 = 0;
    let count1 = 0;
    let sum1 = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            count0++;
            sum1 += count1;
            dp += sum0;
        } else if (s[i] === '1') {
            count1++;
            sum0 += count0;
            dp += sum1;
        }
    }
    
    return dp;
};

module.exports = numberOfWays;
