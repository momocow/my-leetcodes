/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const M = matrix.length
    const N = matrix[0].length
    const ans = []
    const maxLevel = Math.ceil(Math.min(M, N) / 2)
    for (let level = 0; level < maxLevel; level++) {
        const B = 2 * level + 1
        let r = level
        let c = level
        while (c < N - level - 1) ans.push(matrix[r][c++]) // top
        while (r < M - level - 1) ans.push(matrix[r++][c]) // right
        while (M > B && c > level) ans.push(matrix[r][c--]) // bottom
        while (N > B && r > level) ans.push(matrix[r--][c]) // left
        if (M === B || N === B) ans.push(matrix[r][c])
    }
    return ans
};

module.exports = spiralOrder
