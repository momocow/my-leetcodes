function findFence (ans, map, cur, up = true) {
    do {
        let mxt = []
        let mxs = up ? -Infinity : Infinity
        for (const [x, xtrees] of map) {
            if (x > cur[0]) {
                const [xx, yy] = xtrees[up ? xtrees.length - 1 : 0]
                const slope = (yy - cur[1]) / (xx - cur[0])
                if ((up && slope > mxs) || (!up && slope < mxs)) {
                    mxs = slope
                    mxt = [[xx, yy]]
                } else if (slope === mxs) {
                    mxt.push([xx, yy])
                }
            }
        }
        cur = undefined
        for (cur of mxt) if (!setTree(ans, cur)) return
    } while (cur)
}

function setTree (ans, [x, y]) {
    let ymap = ans.get(x) ?? new Map()
    ans.set(x, ymap)
    if (ymap.has(y)) return false
    ymap.set(y, true)
    return true
}

/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
    trees.sort(([x1, y1], [x2, y2]) => x1 - x2 || y1 - y2)
    const lastX = trees[trees.length - 1][0]
    const map = trees.reduce((m, t) => {
        if (!m.has(t[0])) {
            m.set(t[0], [])
        }
        m.get(t[0]).push(t)
        return m
    }, new Map())
    
    let cur = trees[0]
    let ans = new Map()
    setTree(ans, cur)
    
    for (cur of map.get(cur[0]).filter(([, yy]) => yy > cur[1])) {
        setTree(ans, cur)
    }
    findFence(ans, map, cur)
    findFence(ans, map, trees[0], false)
    for (cur of map.get(lastX).filter((t, i, xtrees) => i !== 0 && i !== xtrees.length - 1)) {
        setTree(ans, cur)
    }
    return Array.from(ans.entries())
        .map(([x, ymap]) =>
             Array.from(ymap.keys())
                .map(y => [x, y])
        )
        .flat()
};
  
module.exports = outerTrees
