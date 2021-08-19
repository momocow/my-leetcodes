from functools import lru_cache

MOD = 10**9 + 7


@lru_cache(maxsize=None)
def tree_sum(root):
    return root.val + tree_sum(root.left) + tree_sum(root.right) if root is not None else 0


def max_prod(root, total):
    return max(tree_sum(root) * (total - tree_sum(root)), max_prod(root.right, total), max_prod(root.left, total)) if root is not None and tree_sum(root) <= total / 2 else 0

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        return max_prod(root, tree_sum(root)) % MOD
