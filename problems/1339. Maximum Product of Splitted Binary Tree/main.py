MOD = 10**9 + 7


def tree_sums(root, sums=[]):
    if root is None:
        return 0
    left_sum = tree_sums(root.left, sums)
    right_sum = tree_sums(root.right, sums)
    sums.append(left_sum + right_sum + root.val)
    return sums[-1]


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        sums = []
        half = tree_sums(root, sums) / 2
        return int(((half*half - pow(min(map(lambda s: abs(s - half), sums)), 2))) % MOD)
