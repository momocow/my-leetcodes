const path = require('path')

const escapeStringRegexp = require('escape-string-regexp')
const { quote } = require('shell-quote')

module.exports = function (stagedFiles) {
  const codeFiles = stagedFiles
    .filter(f => f.endsWith('.js'))
    .map(f => path.resolve(f))

  const testcases = stagedFiles
    .map(f => path.relative(__dirname, f))
    .filter(f => f.startsWith('problems'))
    .map(f => path.basename(path.dirname(f)))
    .reduce((s, f) => {
      s.add(f)
      return s
    }, new Set())

  const testNamePatterns = Array.from(testcases)
    .map(escapeStringRegexp)
    .join('|')

  return [
    `eslint --cache --fix ${quote(codeFiles)}`,
    `jest -t "(${testNamePatterns})"`
  ]
}
