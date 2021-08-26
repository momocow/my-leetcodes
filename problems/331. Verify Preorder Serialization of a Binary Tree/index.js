/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  if (preorder === '#') return true
  const nodes = preorder.split(',')
  const stack = []
  if (nodes[0] !== '#') stack.push(nodes.shift())
  while (nodes.length > 0 && stack.length > 0) {
    const left = nodes.shift()
    if (left === undefined) return false
    if (left !== '#') {
      stack.push(left)
      continue
    }
    let right
    do {
      right = nodes.shift()
      if (right === undefined) return false
      stack.pop()
    } while (stack.length > 0 && right === '#')
    if (right !== '#') stack.push(right)
  }
  return stack.length === 0 && nodes.length === 0
}

module.exports = isValidSerialization
