/**
 * Initialize your data structure here.
 */
var MapSum = function () {
  this.map = new Map()
  this.indexes = {}
}

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.map.set(key, val)
  let p = this.indexes
  for (const c of key) {
    if (!p[c]) {
      p[c] = {}
    }
    p = p[c]
  }
}

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let p = this.indexes
  for (const c of prefix) {
    p = p[c]
    if (!p) {
      return 0
    }
  }
  let sum = this.map.get(prefix) ?? 0
  let q = [[prefix, p]]
  while (q.length > 0) {
    const [pf, d] = q.shift()
    const dk = Object.keys(d)
    sum += dk
      .map(k => this.map.get(pf + k) ?? 0)
      .reduce((s, v) => s + v, 0)
    q = q.concat(dk.map(k => [pf + k, d[k]]))
  }
  return sum
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
