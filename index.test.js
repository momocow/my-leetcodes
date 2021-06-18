const exp = require('constants')
const fs = require('fs')
const path = require('path')

const problemsDir = path.join(__dirname, 'problems')

for (const problem of fs.readdirSync(problemsDir)) {
    const problemDir = path.resolve(problemsDir, problem)
    if (fs.statSync(problemDir).isDirectory()) {
        const testcasesFile = path.resolve(problemDir, 'testcases')
        const envFile = path.resolve(problemDir, 'env')

        const fn = require(problemDir)
        if (fs.existsSync(envFile)) {
            Object.assign(global, require(envFile))
        }

        describe(problem, () => {
            test.each(require(testcasesFile))('Case #%#', (...args) => {
                const inputs = args.slice(0, -1)
                const expected = args.slice(-1)
                expect(fn(...inputs)).toEqual(expected[0])
            })
        })
    }
}
