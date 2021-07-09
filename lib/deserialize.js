const { ListNode } = require('./list')

function deserializeListNode (arr) {
  const root = new ListNode()
  let cursor = root
  for (let i = 0; i < arr.length; i++) {
    cursor.val = arr[i]
    if (i < arr.length - 1) {
      cursor.next = new ListNode()
    }
    cursor = cursor.next
  }
  return root
}

module.exports = function deserialize (any, type) {
  switch (type) {
    case ListNode:
      return deserializeListNode(JSON.parse(any))
    default:
      return JSON.parse(any)
  }
}
