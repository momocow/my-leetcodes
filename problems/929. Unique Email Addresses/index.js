/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const s = new Set()
    for (const e of emails) {
        const p = e.indexOf('+')
        const q = e.indexOf('@')
        const i = p < 0 ? q : Math.min(p, q)
        const local = e.slice(0, i).replace(/\./g, '')
        const domain = e.slice(q)
        s.add(local + domain)
    }
    return s.size
};

module.exports = numUniqueEmails
