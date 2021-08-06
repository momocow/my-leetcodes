class TreeNode {
  constructor (val, left, right) {
    this.val = val
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

class Node {
  constructor (val, children = []) {
    this.val = val
    this.children = children
  }
}

module.exports = {
  TreeNode,
  Node
}
