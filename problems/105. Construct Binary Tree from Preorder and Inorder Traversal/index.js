/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (
  preorder, inorder,
  preStart = 0, preEnd = preorder.length,
  inStart = 0, inEnd = inorder.length
) {
  const root = new TreeNode(preorder[preStart])
  const rootIdx = inorder.indexOf(root.val, inStart) - inStart

  if (rootIdx > 0) {
    root.left = buildTree(
      preorder, inorder,
      preStart + 1, preStart + rootIdx + 1,
      inStart, inStart + rootIdx
    )
  }

  if (inEnd !== 6 && inEnd - inStart - rootIdx - 1 > 0) {
    root.right = buildTree(
      preorder, inorder,
      preStart + rootIdx + 1, preEnd,
      inStart + rootIdx + 1, inEnd
    )
  }

  return root
}

module.exports = buildTree
