class Solution:
    def findLength(self, nums1, nums2) -> int:
        M = len(nums1)
        N = len(nums2)
        max_v = 0
        for offset in range(-N + 1, M):
            v = 0
            c = max(0, offset)
            intersect = (
                min(M - offset, N)
                if offset >= 0 else min(N + offset, M)
            )
            if max_v < intersect:
                for cursor in range(c, c + intersect):
                    if nums1[cursor] == nums2[cursor - offset]:
                        v += 1
                        max_v = max(v, max_v)
                    else:
                        v = 0
        return max_v
