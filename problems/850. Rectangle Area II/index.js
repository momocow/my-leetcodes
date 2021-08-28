const MOD = 10 ** 9 + 7

function plus (a, b) {
  return (a + b) % MOD
}

function multiply (a, b) {
  let res = 0
  while (b > 0) {
    const r = b % 2
    if (r === 1) {
      res = (res + a) % MOD
    }
    a = (a * 2) % MOD
    b = (b - r) / 2
  }
  return res
}

class Node {
  constructor (data, start = 0, end = data.length - 1) {
    this.start = start
    this.end = end
    this.data = data
    this.total = 0
    this.count = 0
  }

  get mid () {
    return this._mid ??
      (this._mid = Math.floor((this.start + this.end) / 2))
  }

  get left () {
    return this._left ??
      (this._left = new Node(this.data, this.start, this.mid))
  }

  get right () {
    return this._right ??
      (this._right = new Node(this.data, this.mid, this.end))
  }

  update (i, j, v) {
    if (i >= j) return 0
    if (i === this.start && j === this.end) { // node range matches
      this.count += v
    } else { // split range [i, j] into children
      this.left.update(i, Math.min(j, this.mid), v)
      this.right.update(Math.max(i, this.mid), j, v)
    }

    if (this.count > 0) {
      this.total = this.data[this.end] - this.data[this.start]
    } else {
      this.total = this.left.total + this.right.total
    }
  }
}

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var rectangleArea = function (rectangles) {
  const events = rectangles
    .map(([x1, y1, x2, y2]) => [[y1, 1, x1, x2], [y2, -1, x1, x2]])
    .flat()
    .sort(([y1], [y2]) => y1 - y2)
  const xx = Array.from(new Set(
    rectangles
      .map(([x1, , x2]) => [x1, x2])
      .flat()
      .sort((a, b) => a - b)
  ))
  const root = new Node(xx)
  let area = 0
  let width = 0
  let prev = events[0][0]
  const ii = xx.reduce((d, x, i) => Object.assign(d, { [x]: i }), {})
  for (const [y, type, x1, x2] of events) {
    area = plus(area, multiply(width, y - prev))
    root.update(ii[x1], ii[x2], type)
    width = root.total
    prev = y
  }
  return area
}

module.exports = rectangleArea
