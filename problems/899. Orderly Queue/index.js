/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if (k === 1) {
        let cc
        let ci = []
        for (let i = 0; i < s.length; i++) {
            if (s[i] === cc) {
                ci.push(i)
            } else if (cc === undefined || s[i] < cc) {
                cc = s[i]
                ci = [i]
            }
        }
        for (let j = 1; ci.length > 1; j++) {
            let p
            let q
            for (let k = 0; k < ci.length; k++) {
                const c = s[(ci[k] + j) % s.length]
                if (c === p) {
                    q.push(k)
                } else if (p === undefined || c < p) {
                    p = c
                    q = [k]
                }
            }
            ci = q.map(k => ci[k])
        }
        return s.slice(ci[0]) + s.slice(0, ci[0])
    }
    return s.split('').sort().join('')
};

module.exports = orderlyQueue
