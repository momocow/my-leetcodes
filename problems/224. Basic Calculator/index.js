/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let ans = 0
    let op = '+'
    let buf = ''
    const stack = []
    for (const c of s) {
        if (c === ' ') continue
        if (c >= '0' && c <= '9') {
            buf += c
            continue
        }
        if (c === '(') {
            stack.push([op, ans])
            op = '+'
            ans = 0
            buf = ''
        } else { // +, -, )
            update()
            
            if (c === '+') op = '+'
            else if (c === '-') op = '-'
            else { // )
                // no null check since s is always a valid expression
                [op, ans, right] = [...stack.pop(), ans]
                update(right)
            }
        }
    }
    update()
    return ans
    
    function update (val) {
        if (op === '+') ans += val ?? Number(buf)
        else if (op === '-') ans -= val ?? Number(buf)
        buf = ''
        op = ''
    }
};

module.exports = calculate
