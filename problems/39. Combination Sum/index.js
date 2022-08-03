/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ret = [];
    const prefix = [];
    
    function _combinationSum(target, idx = 0) {
        for (let i = idx; i < candidates.length; i++) {
            const c = candidates[i];
            if (target === c) {
                const matched = [...prefix, c];
                ret.push(matched);
            } else if (c < target) {
                prefix.push(c);
                _combinationSum(target - c, i);
                prefix.pop();
            }
        }
    }
    
    candidates = candidates.sort((a, b) => a - b);
    _combinationSum(target);
    
    return ret;
};

module.exports = combinationSum;
