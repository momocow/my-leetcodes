module.exports.assert = function (result, expected) {
  expect(new Set(result.map(s => s.sort())))
    .toEqual(new Set(JSON.parse(expected).map(e => e.sort())))
}
