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
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let c = head
  let pp1
  let pp2
  let nn = head
  while (true) {
    let i = k
    while (nn && i--) {
      nn = nn.next
    }
    if (i > 0) {
      break
    }
    pp1 = pp2
    pp2 = c
    let n = c.next
    let p = nn
    while (c !== nn) {
      if (pp1 && pp1.next === p) {
        pp1.next = c
      }
      if (p === head) {
        head = c
      }
      c.next = p
      p = c
      c = n
      n = n?.next
    }
  }
  return head
}

module.exports = reverseKGroup
