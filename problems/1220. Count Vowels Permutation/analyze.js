const NEXT = {
  a: ['e'],
  e: ['a', 'i'],
  i: ['a', 'e', 'o', 'u'],
  o: ['i', 'u'],
  u: ['a']
}

const VOWELS = ['a', 'e', 'i', 'o', 'u']

function matchPattern (stats, pattern) {
  return Object.entries(pattern).every(([v, n]) => stats[v] >= n)
}

function divide (stats, pattern) {
  const quotient = []
  while (matchPattern(stats, pattern)) {
    stats = Object.fromEntries(
      Object.entries(stats).map(([v, n]) => [v, n - pattern[v]]))
    quotient.push(pattern)
  }
  return [quotient, stats]
}

function accumulate (vowels) {
  return vowels.reduce((stats, v) => {
    stats[v]++
    return stats
  }, { a: 0, e: 0, i: 0, o: 0, u: 0 })
}

function render (pattern) {
  return Object.entries(pattern)
    .filter(([, n]) => n > 0)
    .map(([v, n]) => v.repeat(n))
    .join('')
}

function analyze (n, vowels = VOWELS) {
  let p = accumulate(vowels)
  const patterns = new Set([p])
  const patternMeta = new Map([[p, { name: 'P1' }]])
  const histories = { 1: [p] }

  p = undefined

  for (let i = 2; i <= n; i++) {
    vowels = vowels.map(v => NEXT[v]).flat()

    let stats = accumulate(vowels)

    // match previous patterns
    for (const pattern of patterns) {
      let matches
      [matches, stats] = divide(stats, pattern)
      if (!Array.isArray(histories[i])) {
        histories[i] = []
      }
      histories[i] = histories[i].concat(matches)
    }
    // make new pattern
    if (!Object.values(stats).every(n => n === 0)) {
      patterns.add(stats)
      histories[i].push(stats)
      patternMeta.set(stats, { name: `P${i}` })
    }

    console.clear()
    console.log(i)
  }

  for (const p of patterns) {
    const { name } = patternMeta.get(p)
    console.log('# %s={%s}', name, render(p))
  }
}

analyze(Number(process.argv[2]))

/**
 * n = 6
 * n=2: P1 P2
 * n=3: P1 P1 P2 P3
 * n=4: P1 P1 P1 P2 P2 P3 P3 P4
 * n=5: P1 P1 P1 P1 P1 P1 P1 P2 P2 P2 P3 P3 P3 P3 P4
 * n=6: P1 P1 P1 P1 P1 P1 P1 P1 P1 P1 P1 P1 P2 P2 P2 P2 P2 P2 P2
 *      P3 P3 P3 P3 P3 P3 P3 P4 P4 P4
 * # P1={aeiou}
 * # P2={aaeiu}
 * # P3={aaee}
 * # P4={ii}
 */

/**
 * Conclusion: no new pattern after n=5
 *
 * F(P1) = P1 + P2
 * F(P2) = P1 + P3
 * F(P3) = P3 + P4
 * F(P4) = 2*P1 - P4
 *
 * P1 = 5
 * P2 = 5
 * P3 = 4
 * P4 = 2
 *
 * N1 = P1 = 5
 * N2 = F(N1) = F(P1) = P1 + P2 = 10
 * N3 = F(N2) = F(P1 + P2) = F(P1) + F(P2) = (P1 + P2) + (P1 + P3) = 19
 * N4 = F(N3) = F(2*P1 + P2 + P3) = 2*F(P1) + F(P2) + F(P3)
 *    = 2*(P1 + P2) + P1 + P3 + P3 + P4 = 35
 * (ETC)
 */
