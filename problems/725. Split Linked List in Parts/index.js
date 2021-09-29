/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    const ans = new Array(k).fill(null)
    let h1 = head
    let c = 0
    while (h1) [c, h1] = [c + 1, h1.next]
    const m = Math.floor(c / k)
    const n = c % k
    let i = 0
    let j = 0
    let h2 = head
    while (h2) {
        const tmp = h2.next
        if (!ans[i]) ans[i] = h2
        if ((i < n && j === m) || (i >= n && j === m - 1)) [h2.next, i, j] = [null, i + 1, 0]
        else j++
        h2 = tmp
    }
    return ans
};

module.exports = splitListToParts
