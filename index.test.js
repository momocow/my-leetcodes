const fs = require('fs')
const path = require('path')

const { buildTestcaseTable } = require('./scripts/testcase')

const problemsDir = path.join(__dirname, 'problems')

for (const problem of fs.readdirSync(problemsDir)) {
    const problemDir = path.resolve(problemsDir, problem)
    if (fs.statSync(problemDir).isDirectory()) {
        const testcasesFile = path.resolve(problemDir, 'testcases')
        const envFile = path.resolve(problemDir, 'env.js')
        const setupFile = path.resolve(problemDir, 'setup.js')

        if (fs.existsSync(envFile)) {
            Object.assign(global, require(envFile))
        }

        let inputDeserializer = JSON.parse
        let outputSerializer = JSON.stringify
        if (fs.existsSync(setupFile)) {
            const { serializer, deserializer } = require(setupFile)
            inputDeserializer = deserializer || inputDeserializer
            outputSerializer = serializer || outputSerializer
        }

        const fn = require(problemDir)

        describe(problem, () => {
            test.each(buildTestcaseTable(testcasesFile, inputDeserializer))(
                'Case #%#',
                (...args) => {
                    const inputs = args.slice(0, -1)
                    const expected = args.slice(-1)
                    expect(outputSerializer(fn(...inputs))).toEqual(expected[0])
                }
            )
        })
    }
}
