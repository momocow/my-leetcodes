const { TreeNode } = require('./tree')
const { ListNode } = require('./list')

function serializeArray (arr, serializer = serialize) {
  return `[${arr.map(serializer).join(',')}]`
}

function serializeTreeNode (node) {
  const arr = []
  const queue = [node]
  while (queue.length > 0) {
    const first = queue.shift()
    if (first) {
      arr.push(String(first.val))
      queue.push(first.left)
      queue.push(first.right)
    } else if (queue.filter(Boolean).length > 0) {
      arr.push('null')
    }
  }
  return serializeArray(arr, s => s)
}

function serializeListNode (node) {
  const arr = [node.val]
  while ((node = node.next)) {
    arr.push(node.val)
  }
  return serializeArray(arr)
}

function serialize (any) {
  if (Array.isArray(any)) {
    return serializeArray(any)
  }
  if (any instanceof TreeNode) {
    return serializeTreeNode(any)
  }
  if (any instanceof ListNode) {
    return serializeListNode(any)
  }
  return JSON.stringify(any)
}

module.exports = serialize
