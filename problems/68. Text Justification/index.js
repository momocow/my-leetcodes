function joinLine (line, maxWidth, lineLen) {
  const spaces = maxWidth - lineLen
  const avgSpaces = Math.floor(spaces / (line.length - 1))
  let extSpaces = spaces % (line.length - 1)
  let lineStr = ''
  for (let j = 0; j < line.length - 1; j++) {
    lineStr += line[j] + ' '.repeat(avgSpaces + (extSpaces-- > 0 ? 1 : 0))
  }
  lineStr += line[line.length - 1]
  return lineStr
}

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const ret = []
  let line = []
  for (let i = 0; i < words.length; i++) {
    const lineLen = line.reduce((c, w) => c + w.length, 0)
    if (words[i].length <= maxWidth - lineLen - line.length) {
      line.push(words[i])
    } else {
      if (line.length === 1) {
        ret.push(line[0].padEnd(maxWidth, ' '))
      } else {
        ret.push(joinLine(line, maxWidth, lineLen))
      }
      line = [words[i]]
    }
  }
  ret.push(line.join(' ').padEnd(maxWidth, ' '))
  return ret
}

module.exports = fullJustify
