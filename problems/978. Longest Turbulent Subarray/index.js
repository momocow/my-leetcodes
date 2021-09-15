/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
    if (arr.length < 2) return arr.length
    let ans = 0
    let count = 1
    let cmp
    for (let i = 0; i < arr.length - 1; i++) {
        if (
            (cmp === true && arr[i] > arr[i + 1]) ||
            (cmp === false && arr[i] < arr[i + 1])
        ) {
            count++
        } else {
            ans = Math.max(ans, count)
            count = arr[i] === arr[i + 1] ? 1 : 2
        }
        cmp = arr[i] < arr[i + 1]
    }
    return Math.max(ans, count)
};

module.exports = maxTurbulenceSize
