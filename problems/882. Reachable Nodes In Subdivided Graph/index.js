class Heap {
    constructor (compare) {
        this.array = []
        this.compare = compare ?? ((a, b) => a - b)
    }
    
    push (item) {
        let i = this.array.push(item) - 1
        let j = Math.floor((i - 1) / 2)
        while (
            i > 0 &&
            this.compare(this.array[j], this.array[i]) > 0
        ) {
            const tmp = this.array[j]
            this.array[j] = this.array[i]
            this.array[i] = tmp
            i = j
            j = Math.floor((i - 1) / 2)
        }
    }
    
    shift () {
        const tmp1 = this.array[0]
        this.array[0] = this.array[this.array.length - 1]
        this.array[this.array.length - 1] = tmp1
        const ret = this.array.pop()

        // fix downward
        let i = 0
        let c1 = i * 2 + 1
        let c2 = i * 2 + 2
        while (true) {
            const c = c2 < this.array.length &&
                this.compare(this.array[c1], this.array[c2]) > 0
                    ? c2
                    : c1 < this.array.length
                        ? c1
                        : -1
            if (c < 0 || this.compare(this.array[i], this.array[c]) <= 0) break
            const tmp2 = this.array[i]
            this.array[i] = this.array[c]
            this.array[c] = tmp2
            i = c
            c1 = i * 2 + 1
            c2 = i * 2 + 2
        }
            
        return ret
    }
        
    get length () {
        return this.array.length
    }
}

function link (m, u, v, c) {
    m.set(u, (m.get(u) ?? new Map()).set(v, c))
    m.set(v, (m.get(v) ?? new Map()).set(u, c))
    return m
}

/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */
var reachableNodes = function(edges, maxMoves, n) {
    const graph = edges.reduce((m, [u, v, c]) => link(m, u, v, c), new Map())
    const visited = new Set()
    const h = new Heap(([d1], [d2]) => d1 - d2)
    const d = new Array(n).fill(Infinity)

    // init
    d[0] = 0
    h.push([0, 0])
    
    while (h.length > 0 && visited.size < n) {
        const [dist, node] = h.shift()
        visited.add(node)
        d[node] = Math.min(d[node] ?? Infinity, dist)
        const neighbors = Array.from(graph.get(node)?.keys() ?? [])
            .filter(n => !visited.has(n))
        for (const nb of neighbors) {
            h.push([d[node] + graph.get(node).get(nb) + 1, nb])
        }
    }
    let ans = d.reduce((s, dd) => dd <= maxMoves ? s + 1 : s, 0)
    for (const [u, v, c] of edges) {
        ans += Math.min(
            Math.max(0, maxMoves - d[u]) + Math.max(0, maxMoves - d[v]),
            c
        )
    }
    return ans
};

module.exports = reachableNodes
