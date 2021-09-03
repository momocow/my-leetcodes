/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let root
    let node
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            if (node) node.next = l1
            node = l1
            l1 = l1.next
        }
        else {
            if (node) node.next = l2
            node = l2
            l2 = l2.next
        }
        if (!root) root = node
    }
    if (node) node.next = l1 ?? l2
    else root = l1 ?? l2
    return root
};

module.exports = mergeTwoLists
