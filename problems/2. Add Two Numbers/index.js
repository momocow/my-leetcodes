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
var addTwoNumbers = function (l1, l2) {
  const ret = new ListNode()
  let cursor
  do {
    if (cursor && !cursor.next) {
      cursor.next = new ListNode()
    }
    cursor = cursor?.next ?? ret
    cursor.val += (l1?.val ?? 0) + (l2?.val ?? 0)
    if (cursor.val > 9) {
      cursor.val -= 10
      cursor.next = new ListNode(1) // carry
    }
    l1 = l1?.next
    l2 = l2?.next
  } while (l1 || l2)
  return ret
}

module.exports = addTwoNumbers
