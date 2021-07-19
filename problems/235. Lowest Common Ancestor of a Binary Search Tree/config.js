const { TreeNode } = require('../../lib/tree')

function singleTreeNode (v) {
  return new TreeNode(v)
}

module.exports = {
  inputType: [TreeNode, singleTreeNode, singleTreeNode],
  serializeOutput (output) {
    return JSON.stringify(output.val)
  }
}
