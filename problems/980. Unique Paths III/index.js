const D = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    const nonObs = grid.reduce(
        (s, row) => s + row.reduce(
            (ss, cell) => cell !== -1 ? ss + 1 : ss,
            0
        ),
        0
    );
    
    let startR;
    let startC
    const done = grid.map((row, r) => row.map((_, c) => {
        if (grid[r][c] === 1) {
            startR = r;
            startC = c;
        }
        return grid[r][c] === 1;
    }));
    
    const solve = (r, c, nodes = 0) => {
        nodes++;
        if (grid[r][c] === 2) return nodes === nonObs ? 1 : 0;

        let ans = 0;
        for (const [dr, dc] of D) {
            const rr = r + dr;
            const cc = c + dc;
            if (grid[rr]?.[cc] !== undefined &&
                grid[rr][cc] !== -1 &&
                !done[rr][cc]
            ) {
                done[rr][cc] = true;
                ans += solve(rr, cc, nodes);
                done[rr][cc] = false;
            }
        }
        return ans;
    };
    
    return solve(startR, startC);
}

module.exports = uniquePathsIII;
