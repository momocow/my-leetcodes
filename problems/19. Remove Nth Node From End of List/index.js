/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let root = null
    let prev = null
    let victim = head
    let next = head.next
    let end = head
    while (--n) end = end.next
    while (end.next) [
        root,
        prev,
        victim,
        next,
        end
    ] = [
        root ?? prev,
        victim,
        victim.next,
        next.next,
        end.next
    ]
    if (victim === end) end = null
    if (prev) prev.next = next
    root = root ?? prev ?? next
    return root
};

module.exports = removeNthFromEnd
