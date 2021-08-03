module.exports.assert = function (result, expected) {
  expect(new Set(result.map(s => new Set(s))))
    .toEqual(new Set(JSON.parse(expected).map(s => new Set(s))))
}
