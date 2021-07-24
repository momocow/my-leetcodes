class ReverseTreeNode {
  constructor (val, parent) {
    this.val = val
    this.parent = parent || null
  }
}

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList)
  wordSet.delete(beginWord)

  const letterSets = Array.from(wordList[0])
    .map(c => new Set([c]))
  for (let i = 1; i < wordList.length; i++) {
    for (let j = 0; j < wordList[i].length; j++) {
      letterSets[j].add(wordList[i][j])
    }
  }

  const tree = new ReverseTreeNode(beginWord)
  const target = []
  let leaves = [tree]
  let end

  while (!end && leaves.length > 0 && wordSet.size > 0) {
    end = false
    const newLeaves = []
    for (const node of leaves) {
      for (let c = 0; c < node.val.length; c++) {
        for (const l of letterSets[c]) {
          if (l !== node.val[c]) {
            const adjacent = node.val.substr(0, c) + l + node.val.substr(c + 1)
            if (wordSet.has(adjacent)) {
              const child = new ReverseTreeNode(adjacent, node)
              newLeaves.push(child)
              if (adjacent === endWord) {
                end = true
                target.push(child)
              }
            }
          }
        }
      }
    }
    for (const node of newLeaves) {
      wordSet.delete(node.val)
    }
    leaves = newLeaves
  }

  const ret = []
  for (let i = 0; i < target.length; i++) {
    let node = target[i]
    const seq = []
    while (node) {
      seq.unshift(node.val)
      node = node.parent
    }
    ret.push(seq)
  }
  return ret
}

module.exports = findLadders
