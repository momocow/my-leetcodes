function addEdge (m, from, to) {
    m.set(from, (m.get(from) ?? []).concat([to]))
}

function sumDist (m, i) {
    let q = []
    const done = new Set()
    let sum = 0

    // BFS
    q.push([i, 0, -1]) // [node, dist, parent]
    while (q.length > 0) {
        const [ii, dist, parent] = q.shift()
        done.add(ii)
        sum += dist
        if (m.has(ii)) q = q.concat(
            m.get(ii)
                .filter(v => v !== parent)
                .map(v => [v, dist + 1, ii])
        )
    }
    return sum
}

function countChildren (m, node, parent, ret = new Map()) {
    return ret.set(
        node,
        1 +
            m.get(node)
                ?.filter(child => child !== parent)
                .map(child => countChildren(m, child, node, ret).get(child))
                .reduce((s, c) => s + c, 0)
                ?? 0
    )
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const m = new Map()
    for (const [from, to] of edges) {
        addEdge(m, from, to)
        addEdge(m, to, from)
    }
    edges = undefined
    
    const ans = new Array(n)
    ans[0] = sumDist(m, 0)
    const c = countChildren(m, 0)
    let q = [0]
    while (q.length > 0) {
        const parent = q.shift()
        for (const child of m.get(parent) ?? []) {
            if (ans[child] === undefined) {
                ans[child] = ans[parent] - c.get(child) * 2 + n
                q.push(child)
            }
        }
    }
    
    return ans
};

module.exports = sumOfDistancesInTree
