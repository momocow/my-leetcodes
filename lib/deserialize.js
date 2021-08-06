const { ListNode } = require('./list')
const { TreeNode, Node } = require('./tree')

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

function deserializeTreeNode (arr) {
  let i = 0
  const root = new TreeNode(arr[i++])
  const q = [root]

  while (q.length > 0) {
    const node = q.shift()
    if (i < arr.length && arr[i++] !== null) {
      node.left = new TreeNode(arr[i - 1])
      q.push(node.left)
    }
    if (i < arr.length && arr[i++] !== null) {
      node.right = new TreeNode(arr[i - 1])
      q.push(node.right)
    }
  }
  return root
}

function deserializeNode (arr) {
  if (Array.isArray(arr)) {
    let root
    let q = []
    let nullIndex = -1
    do {
      const parent = q.shift()
      const children = []
      const start = nullIndex + 1
      nullIndex = arr.indexOf(null, start)
      if (nullIndex < 0) {
        nullIndex = arr.length
      }
      for (let i = start; i < nullIndex; i++) {
        children.push(new Node(arr[i]))
      }
      if (!root) {
        root = children[0]
      }
      if (parent) {
        parent.children = children
      }
      q = q.concat(children)
    } while (nullIndex >= 0 && nullIndex < arr.length)
    return root
  }
  return null
}

module.exports = function deserialize (any, type) {
  switch (type) {
    case ListNode:
      return deserializeListNode(JSON.parse(any))
    case TreeNode:
      return deserializeTreeNode(JSON.parse(any))
    case Node:
      return deserializeNode(JSON.parse(any))
    default:
      if (typeof type === 'function') {
        return type(JSON.parse(any))
      }
      return JSON.parse(any)
  }
}
