function build(trie, word) {
    const s = new Set();
    let cur = trie;
    for (const c of word) {
        if (s.has(c)) continue;
        cur.set(c, (cur.get(c) ?? new Map()));
        cur = cur.get(c);
        s.add(c);
    }
    cur.set('', (cur.get('') ?? 0) + 1);
}

/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const trie = new Map();
    for (const word of words) build(trie, word);
    
    let ans = [];
    for (const puzzle of puzzles) {
        let count = 0;
        const ps = new Set(puzzle);
        let q = [[trie, false]];
        while (q.length > 0) {
            const [cur, found] = q.shift();
            count += found ? (cur.get('') ?? 0) : 0;
            q = q.concat(Array.from(cur)
                .filter(([k]) => ps.has(k))
                .map(([k, v]) => [v, found || k === puzzle[0]]));
        }
        ans.push(count);
    }
    return ans;
};

module.exports = findNumOfValidWords;
