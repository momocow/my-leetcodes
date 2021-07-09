const fs = require('fs')
const path = require('path')

const { buildTestcaseTable, runTestcase } = require('./lib/testcase')
const { TreeNode } = require('./lib/tree')
const { ListNode } = require('./lib/list')

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
    const testcasesFile = path.resolve(problemDir, 'testcases')
    const configFile = path.resolve(problemDir, 'config.js')

    const fn = require(problemDir)
    const config = fs.existsSync(configFile) ? require(configFile) : {}

    describe(problem, () => {
      test.each(buildTestcaseTable(testcasesFile, config?.testcase?.input))(
        'Case #%#',
        (...args) => {
          expect(runTestcase(fn, args.slice(0, -1)))
            .toEqual(args.slice(-1)[0])
        }
      )
    })
  }
}
