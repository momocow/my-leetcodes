MOD = 10**9 + 7


def multiply(mtx1, mtx2):
    ret = []
    rows = len(mtx1)
    cols = len(mtx2)
    for i in range(rows):
        ret.append([])
        for j in range(rows):
            ret[i].append(0)
            for k in range(cols):
                ret[i][j] = ret[i][j] + mtx1[i][k] * mtx2[k][j] % MOD
    return ret


def fast_power(mtx, n):
    if n == 0:
        dim = len(mtx)
        return [
            [
                1 if i == j else 0
                for j in range(dim)
            ]
            for i in range(dim)
        ]

    if n == 1:
        return mtx

    res = fast_power(mtx, n // 2)
    res = multiply(res, res)

    if n % 2 == 1:
        res = multiply(mtx, res)

    return res


class Solution:
    def countVowelPermutation(self, n: int) -> int:
        factor = fast_power([
            [1, 1, 0, 0],
            [1, 0, 1, 0],
            [0, 0, 1, 1],
            [2, 0, 0, -1]
        ], n - 1)

        # multiply([[1, 0, 0, 0]], factor) == factor[0]
        return sum(multiply([factor[0]], [[5], [5], [4], [2]])[0]) % MOD