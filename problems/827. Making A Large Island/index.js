const DIRECTIONS = [[0, 1], [1, 0], [0, -1], [-1, 0]]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const N = grid.length

  // grid to islands
  const g2i = new Array(N)
  for (let i = 0; i < N; i++) {
    g2i[i] = new Array(N)
  }

  const islands = []
  const straits = []

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (g2i[i][j] !== undefined) continue
      if (grid[i][j] === 1) { // land
        searchIsland(i, j)
      } else { // sea
        g2i[i][j] = -1
        for (const [dx, dy] of DIRECTIONS) {
          const sx = i + dx
          const sy = j + dy
          if (
            sx >= 0 && sx < N &&
            sy >= 0 && sy < N &&
            g2i[sx][sy] === undefined &&
            grid[sx][sy] === 1
          ) {
            straits.push([i, j])
            searchIsland(sx, sy)
            break
          }
        }
      }
    }
  }

  if (islands.length === 0) return 1

  if (straits.length === 0) return Math.max(...islands)

  const links = new Map()
  for (const [sx, sy] of straits) {
    const noList = DIRECTIONS
      .map(([dx, dy]) => [sx + dx, sy + dy])
      .filter(([xx, yy]) =>
        xx >= 0 && xx < N &&
        yy >= 0 && yy < N &&
        grid[xx][yy] === 1)
      .map(([xx, yy]) => g2i[xx][yy])
    const noSet = new Set(noList)
    if (noSet.size > 1) {
      const lb = noList.sort().join(',')
      if (!links.has(lb)) {
        links.set(lb, noSet)
      }
    }
  }

  if (links.size === 0) return Math.max(...islands) + 1

  let max = 0
  for (const set of links.values()) {
    max = Math.max(
      max,
      Array.from(set).map(n => islands[n]).reduce((sum, a) => sum + a, 0) + 1
    )
  }
  return max

  function searchIsland (i, j) {
    // new island, search with BFS
    g2i[i][j] = islands.push(0) - 1 // island no. => island size
    const q = [[i, j]]
    while (q.length > 0) {
      const [x, y] = q.shift()
      islands[g2i[i][j]]++
      // search adjacent area
      for (const [xx, yy] of DIRECTIONS) {
        const xxx = x + xx
        const yyy = y + yy
        if (
          xxx >= 0 && xxx < N &&
          yyy >= 0 && yyy < N &&
          g2i[xxx][yyy] === undefined
        ) {
          // mark as the new island or sea
          if (grid[xxx][yyy] === 1) {
            g2i[xxx][yyy] = g2i[i][j]
            q.push([xxx, yyy])
          } else {
            g2i[xxx][yyy] = -1
            straits.push([xxx, yyy])
          }
        }
      }
    }
  }
}

module.exports = largestIsland
