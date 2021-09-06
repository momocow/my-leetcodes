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
    let next = head.next
    let end = head
    while (--n) end = end.next
    while (end.next) [
        root,
        prev,
        next,
        end
    ] = [
        root ?? prev,
        prev?.next ?? head,
        next.next,
        end.next
    ]
    if (n === 1) end = null
    if (prev) prev.next = next
    root = root ?? prev ?? next
    return root
};

module.exports = removeNthFromEnd
