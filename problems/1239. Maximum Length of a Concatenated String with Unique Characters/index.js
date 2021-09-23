/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const sets = []
    for (const s of arr) {
        const ss = new Set(s)
        if (ss.size !== s.length) continue
        const as = Array.from(s)
        for (const set of sets) {
            if (as.every(c => !set.has(c))) {
                sets.push(
                    as.reduce((t, c) => t.add(c), new Set(set))
                )
            }
        }
        sets.push(ss)
    }
    return Math.max(...sets.map(set => set.size), 0)
};

module.exports = maxLength
