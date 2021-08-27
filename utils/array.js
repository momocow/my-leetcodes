/**
 * @param  {...any[]} arrs
 */
function * zip (...arrs) {
  const l = Math.max(...arrs.map(arr => arr.length))
  for (let i = 0; i < l; i++) {
    yield arrs.map(arr => arr[i])
  }
}

module.exports = {
  zip
}
