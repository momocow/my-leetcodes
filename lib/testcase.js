const fs = require('fs')

module.exports.buildTestcaseTable = function (testcasesFile) {
  const blocks = fs.readFileSync(testcasesFile, 'utf-8').split(/(?:\r?\n){2}/)
  const [inputs, expects] = blocks.reduce((cases, block, blockno) => {
    const lines = block.split(/\r?\n/)

    // 1st block is "Your input"
    // last block is "Expected"
    if (blockno === 0 || blockno === blocks.length - 1) {
      // 1st line in each block is the block title
      cases.push(lines.slice(1).map(l => l.trim()).filter(l => !!l))
    }
    return cases
  }, [])

  if (inputs.length % expects.length !== 0) {
    throw new Error(
      'Mismatch between number of testcases and ' +
      'the number of expected values'
    )
  }

  const inputsPerCase = inputs.length / expects.length
  return inputs
    .reduce((table, input, i) => {
      const caseno = Math.floor(i / inputsPerCase)
      while (table.length < caseno + 1) {
        table.push([])
      }
      table[caseno].push(input)
      return table
    }, [])
    .reduce((table, testcase, i) => {
      table.push(testcase.concat([expects[i]]))
      return table
    }, [])
}
