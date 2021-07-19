const fs = require('fs')
const path = require('path')

const { buildTestcaseTable } = require('./lib/testcase')
const { TreeNode } = require('./lib/tree')
const { ListNode } = require('./lib/list')
const serialize = require('./lib/serialize')
const deserialize = require('./lib/deserialize')

const problemsDir = path.join(__dirname, 'problems')

beforeAll(() => {
  global.TreeNode = TreeNode
  global.ListNode = ListNode
})

afterAll(() => {
  delete global.TreeNode
})

for (const problem of fs.readdirSync(problemsDir)) {
  const problemDir = path.resolve(problemsDir, problem)
  if (fs.statSync(problemDir).isDirectory()) {
    describe(problem, () => {
      const testcasesFile = path.resolve(problemDir, 'testcases')
      if (fs.existsSync(testcasesFile)) {
        const configFile = path.resolve(problemDir, 'config.js')
        const config = fs.existsSync(configFile) ? require(configFile) : {}
        test.each(buildTestcaseTable(testcasesFile))(
          'Case #%#',
          (...args) => {
            const fn = require(problemDir)
            const assert = config.assert ?? defaultAssert
            assert(
              fn.apply(
                null,
                args.slice(0, -1)
                  .map(
                    config.deserializeInput ?? (
                      (arg, i) => deserialize(
                        arg,
                        Array.isArray(config.inputType)
                          ? config.inputType[i]
                          : config.inputType
                      )
                    )
                  )
              ),
              args.slice(-1)[0]
            )
            function defaultAssert (result, expected) {
              expect((config.serializeOutput ?? serialize)(result))
                .toEqual(expected)
            }
          }
        )
      }
    })
  }
}
