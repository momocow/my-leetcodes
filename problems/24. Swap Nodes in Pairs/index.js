/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const root = head?.next ?? head
    let next = head?.next ?? null
    while (head && next) [head.next, next.next, head, next] = [next.next?.next ?? next.next, head, next.next, next.next?.next ?? null]
    return root
};

module.exports = swapPairs
