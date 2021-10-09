const D = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];

function trie(words) {
    const root = new Map()
    for (const word of words) {
        let t = root;
        for (const w of word) {
            const n = t.get(w) ?? new Map();
            t.set(w, n);
            t = n;
        }
        t.set('', true);
    }
    return root;
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const tt = trie(words);
    const done = board.map(r => r.map(() => false));
    const ans = [];  
    function solve (i, j, t, p = '') {
        if (t.has('')) {
            ans.push(p);
            t.delete('');
        };
        if (!t.has(board[i]?.[j]) || done[i][j]) return;
        done[i][j] = true;
        for (const [di, dj] of D) {
            solve(i + di, j + dj, t.get(board[i][j]), p + board[i][j]);
        }
        done[i][j] = false;
    }
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[i].length; j++)
            solve(i, j, tt);
    return ans;
};

module.exports = findWords;
