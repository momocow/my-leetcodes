from functools import lru_cache

MOD = 10 ** 9 + 7


@lru_cache(maxsize=None)
def fast_pow(a, n):
    if n == 0:
        return 1
    return fast_pow(a, n // 2) * fast_pow(a, n // 2) % MOD * (a if n % 2 == 1 else 1) % MOD


class Solution:
    def minNonZeroProduct(self, p: int) -> int:
        x = 2 ** p - 1
        return fast_pow(x - 1, (x - 1) // 2) * x % MOD
