function solve (boxes, dp, l, r, k) {
  if (l > r) {
    return 0
  }

  while (r > l && boxes[r] === boxes[r - 1]) {
    r--
    k++
  }

  if (dp[l][r][k] !== undefined) {
    return dp[l][r][k]
  }

  dp[l][r][k] = solve(boxes, dp, l, r - 1, 0) + (k + 1) * (k + 1)

  for (let i = l; i < r; i++) {
    if (boxes[i] === boxes[r]) {
      dp[l][r][k] = Math.max(dp[l][r][k], solve(boxes, dp, l, i, k + 1) +
                        solve(boxes, dp, i + 1, r - 1, 0))
    }
  }

  return dp[l][r][k]
}

/**
* @param {number[]} boxes
* @param {Map<number, number>} counter
* @param {number} mostFreqBox
* @return {number}
*/
var removeBoxes = function (boxes) {
  const dp = new Array(100)
  for (let i = 0; i < 100; i++) {
    dp[i] = new Array(100)
    for (let j = 0; j < 100; j++) {
      dp[i][j] = new Array(100)
    }
  }

  return solve(boxes, dp, 0, boxes.length - 1, 0)
}

module.exports = removeBoxes
