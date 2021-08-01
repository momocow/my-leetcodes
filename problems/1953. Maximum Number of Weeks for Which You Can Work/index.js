/**
* @param {number[]} milestones
* @return {number}
*/
var numberOfWeeks = function (milestones) {
  const sum = milestones.reduce((s, m) => s + m, 0)
  const max = Math.max(milestones)
  const diff = 2 * max - sum
  if (diff > 1) {
    return 2 * sum - 2 * max + 1
  }
  return sum
}

module.exports = numberOfWeeks
