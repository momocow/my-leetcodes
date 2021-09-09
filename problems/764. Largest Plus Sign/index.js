function count1s (n, set, map, r, c, dr, dc) {
    let ones = 0
    while (r >= 0 && r < n && c >= 0 && c < n) {
        if (set.has(label(r, c))) {
            ones = 0
        } else {
            ones++
        }
        map[r][c] = Math.min(ones, map[r][c])
        r += dr
        c += dc
    }
    return map
}

function label (r, c) { return r + ' ' + c }

/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const set = mines.reduce((s, [r, c]) => s.add(label(r, c)), new Set())
    const map = new Array(n).fill().map(() => new Array(n).fill(Infinity))
    
    for (let r = 0; r < n; r++) {
        count1s(n, set, map, r, 0, 0, 1) // left
        count1s(n, set, map, r, n - 1, 0, -1) // right
    }
    
    for (let c = 0; c < n; c++) {
        count1s(n, set, map, 0, c, 1, 0) // top
        count1s(n, set, map, n - 1, c, -1, 0) // bottom
    }
    
    return Math.max(...map.map(row => Math.max(...row)))
};

module.exports = orderOfLargestPlusSign
