const D = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    function findO(r, c) {
        if (board[r][c] === 'X') return;
        o.add(r + '_' + c);
        done[r][c] = true;
        for (const [dr, dc] of D) {
            const rr = r + dr;
            const cc = c + dc;
            if (board[rr]?.[cc] && !done[rr][cc]) {
                findO(rr, cc);
            }
        }
    }
    const done = board.map(row => row.map(() => false));
    const o = new Set();
    
    for (let r = 0; r < board.length; r++) {
        if (r === 0 || r === board.length - 1) {
            for (let c = 0; c < board[r].length; c++) findO(r, c);
        } else {
            findO(r, 0);
            findO(r, board[r].length - 1);
        }
    }
        
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (!o.has(r + '_' + c)) board[r][c] = 'X';
        }
    }
};
