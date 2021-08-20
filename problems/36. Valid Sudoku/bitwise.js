const MASKS = new Array(32).fill().map((_, i) => Math.pow(2, i))

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rf = new Array(3).fill(0)
  const cf = new Array(3).fill(0)
  const bf = new Array(3).fill(0)

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === '.') continue
      const n = Number(board[r][c]) - 1
      const rr = Math.floor(r / 3)
      const rm = (r % 3) * 9 + n
      const cc = Math.floor(c / 3)
      const cm = (c % 3) * 9 + n
      const bb = rr
      const bm = cc * 9 + n
      if (
        (rf[rr] & MASKS[rm]) !== 0 ||
        (cf[cc] & MASKS[cm]) !== 0 ||
        (bf[bb] & MASKS[bm]) !== 0
      ) {
        return false
      }
      rf[rr] |= MASKS[rm]
      cf[cc] |= MASKS[cm]
      bf[bb] |= MASKS[bm]
    }
  }
  return true
}

module.exports = isValidSudoku
