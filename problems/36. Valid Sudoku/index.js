function createSets (n) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(new Set())
  }
  return arr
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const cols = createSets(9)
  const rows = createSets(9)
  const blocks = new Array(3).fill().map(() => createSets(3))

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') continue
      const br = Math.floor(r / 3)
      const bc = Math.floor(c / 3)
      if (
        rows[r].has(board[r][c]) ||
        cols[c].has(board[r][c]) ||
        blocks[br][bc].has(board[r][c])
      ) {
        return false
      }
      rows[r].add(board[r][c])
      cols[c].add(board[r][c])
      blocks[br][bc].add(board[r][c])
    }
  }
  return true
}

module.exports = isValidSudoku
