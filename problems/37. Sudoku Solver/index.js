class Cache extends Map {}

function wrap (fn, options, ...args) {
  let c = getLeaf(options.cache, options.depth, args)
  const lastArg = args[args.length - 1]
  if (c?.has(lastArg)) {
    return c.get(lastArg)
  }
  const ret = fn(...args)
  if (!c) {
    c = getLeaf(options.cache, options.depth, args, () => new options.Cache())
  }
  c.set(lastArg, ret)
  return ret
}

function getLeaf (c, l, args, init) {
  for (let i = 0; i < l - 1; i++) {
    if (!c.has(args[i])) {
      if (typeof init === 'function') {
        c.set(args[i], init())
      } else return
    }
    c = c.get(args[i])
  }
  return c
}

function memoize (fn) {
  const options = { Cache, depth: fn.length, cache: new Cache() }
  const wrapped = wrap.bind(undefined, fn, options)
  return Object.assign(wrapped, options)
}

const index = memoize((r, c, n) => {
  const rr = Math.floor(r / 3)
  const rm = (r % 3) * 9 + n
  const cc = Math.floor(c / 3)
  const cm = (c % 3) * 9 + n
  const bb = rr
  const bm = cc * 9 + n
  return [[rr, rm], [cc, cm], [bb, bm]]
})

const getMask = memoize(Math.pow.bind(undefined, 2))

function canSet (f, i, m) {
  return (f[i] & getMask(m)) === 0
}

function getBit (n, i) {
  return n & getMask(i)
}

function setBit (n, i) {
  return n | getMask(i)
}

function clearBit (n, i) {
  return n & ~getMask(i)
}

/**
 * @param  {...any[]} arrs
 */
function * zip (...arrs) {
  const l = Math.max(...arrs.map(arr => arr.length))
  for (let i = 0; i < l; i++) {
    yield arrs.map(arr => arr[i])
  }
}

function getBlockDim (x) {
  return Math.floor(x / 3) * 3
}

function getBlock (r, c) {
  return [getBlockDim(r), getBlockDim(c)]
}

function setBoard (draft, board, r, c, n) {
  board[r][c] = String(n + 1)
  draft[r][c] = undefined

  for (let i = 0; i < 9; i++) {
    // clear row
    if (draft[r][i] !== undefined) {
      draft[r][i] = clearBit(draft[r][i], n)
    }
    // clear column
    if (draft[i][c] !== undefined) {
      draft[i][c] = clearBit(draft[i][c], n)
    }
    // clear block
    const [rrr, ccc] = getBlock(r, c)
    const rm = rrr + Math.floor(i / 3)
    const cm = ccc + i % 3
    if (draft[rm][cm] !== undefined) {
      draft[rm][cm] = clearBit(draft[rm][cm], n)
    }
  }
}

function solve (unsolved, draft, board, ur = 0, uc = -1) {
  while (unsolved > 0) {
    const prev = unsolved
    for (let bb = 0; bb < 9; bb++) {
      const rr = Math.floor(bb / 3)
      const cc = bb % 3
      const rrr = rr * 3
      const ccc = cc * 3
      for (let n = 0; n < 9; n++) {
        const candidates = []
        for (let sb = 0; sb < 9; sb++) {
          const r = rrr + Math.floor(sb / 3)
          const c = ccc + sb % 3
          if (draft[r][c] !== undefined && getBit(draft[r][c], n) !== 0) {
            candidates.push([r, c])
          }
        }

        if (candidates.length === 1) { // solve
          setBoard(draft, board, ...candidates[0], n)
          unsolved--
        } else if (candidates.length === 2) {
          const [r0, c0] = candidates[0]
          const [r1, c1] = candidates[1]
          if (r0 === r1) {
            for (let i = 0; i < 9; i++) {
              // clear row
              if (draft[r0][i] !== undefined && (i < ccc || i > ccc + 2)) {
                draft[r0][i] = clearBit(draft[r0][i], n)
              }
            }
          } else if (c0 === c1) {
            for (let i = 0; i < 9; i++) {
              // clear column
              if (draft[i][c0] !== undefined && (i < rrr || i > rrr + 2)) {
                draft[i][c0] = clearBit(draft[i][c0], n)
              }
            }
          }
        }
      }
    }
    if (prev === unsolved) { // backtracking
      let rr
      let cc
      for (let r = ur; r < 9; r++) {
        for (let c = uc + 1; c < 9; c++) {
          if (draft[r][c] !== undefined) {
            rr = r
            cc = c
            r = 9
            c = 9
          }
        }
      }
      if (rr === undefined || cc === undefined) return false
      ur = rr
      uc = cc
      for (let n = 0; n < 9; n++) {
        if (getBit(draft[ur][uc], n) !== 0) {
          const copyDraft = draft.map(row => row.slice())
          setBoard(copyDraft, board, ur, uc, n)
          if (solve(unsolved - 1, copyDraft, board, ur, uc)) {
            return true
          }
        }
      }
      return false
    }
  }
  return true
}

/**
 * @param {string[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const flags = [
    new Array(3).fill(0), // rows
    new Array(3).fill(0), // columns
    new Array(3).fill(0) // blocks
  ]

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] !== '.') {
        for (const [f, [i, m]] of zip(
          flags,
          index(r, c, Number(board[r][c]) - 1))
        ) {
          f[i] = setBit(f[i], m)
        }
      }
    }
  }

  let unsolved = 0
  const draft = new Array(board.length)

  for (let r = 0; r < board.length; r++) {
    draft[r] = new Array(board[r].length)
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === '.') {
        unsolved++
        for (let n = 0; n < 9; n++) {
          if (
            Array.from(zip(flags, index(r, c, n)))
              .every(([f, [i, m]]) => canSet(f, i, m))
          ) {
            draft[r][c] = setBit(draft[r][c] ?? 0, n)
          }
        }
      }
    }
  }

  solve(unsolved, draft, board)

  return board
}

module.exports = solveSudoku
