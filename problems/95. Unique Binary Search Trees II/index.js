const cache = new Map()

const generateTrees = function (end, start = 1) {
  const k = `${end}${start}`

  if (cache.has(k)) return cache.get(k)

  const arr = []
  for (let i = start; i <= end; i++) {
    const leftTree = generateTrees(i - 1, start)
    if (leftTree.length === 0) {
      leftTree.push(null)
    }
    const rightTree = generateTrees(end, i + 1)
    if (rightTree.length === 0) {
      rightTree.push(null)
    }

    for (const left of leftTree) {
      for (const right of rightTree) {
        arr.push(new TreeNode(i, left, right))
      }
    }
  }
  cache.set(k, arr)
  return arr
}

module.exports = generateTrees
