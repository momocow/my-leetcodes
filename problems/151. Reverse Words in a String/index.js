/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // /** this answer is a little bit slower since it contains more copy operations. **/
    // return s.split(/ +/)
    //     .filter(ss => !!ss)
    //     .reverse()
    //     .join(' ');
  
    const ans = [''];
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ' && ans[ans.length - 1].length > 0) ans.push('');
        else if (s[i] !== ' ') ans.push(s[i] + ans.pop());
    }
    if (ans[ans.length - 1].length === 0) ans.pop();
    return ans.join(' ');
};

module.exports = reverseWords;
