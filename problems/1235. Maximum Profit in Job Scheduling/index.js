/**
 * @param  {...any[]} arrs
 */
function * zip (...arrs) {
  const l = Math.max(...arrs.map(arr => arr.length))
  for (let i = 0; i < l; i++) {
    yield arrs.map(arr => arr[i])
  }
}

function bs (arr, target, start = 0, end = arr.length) {
  if (arr[start] < target) return start
  if (arr[end - 1] >= target) return end
  while (end - start > 1) {
    const mid = Math.floor((start + end) / 2)
    if (arr[mid] > target) {
      start = mid
    } else if (arr[mid] < target) {
      end = mid
    } else {
      return mid + 1
    }
  }
  return end
}

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  // sort by start time in descending order
  const jobs = Array.from(zip(startTime, endTime, profit))
    .sort(([s1], [s2]) => s2 - s1)
  startTime = Array.from(new Set(jobs.map(([s]) => s)))
  const timeIndex = startTime
    .reduce((d, t, i) => Object.assign(d, { [t]: i }), {})
  const dp = new Array(startTime.length).fill(0)
  let mx = 0
  for (const [s, e, p] of jobs) {
    dp[timeIndex[s]] = Math.max(mx, p + (dp[bs(startTime, e) - 1] ?? 0))
    mx = Math.max(mx, dp[timeIndex[s]])
  }
  return mx
}

module.exports = jobScheduling
