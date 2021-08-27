class Cache extends Map {}

function wrap (fn, options, ...args) {
  let c = getLeaf(options.cache, options.depth, args)
  const lastArg = args[args.length - 1]
  if (c?.has(lastArg)) {
    return c.get(lastArg)
  }
  const ret = fn(...args)
  if (!c) {
    c = getLeaf(options.cache, options.depth, args, () => new options.Cache())
  }
  c.set(lastArg, ret)
  return ret
}

function getLeaf (c, l, args, init) {
  for (let i = 0; i < l - 1; i++) {
    if (!c.has(args[i])) {
      if (typeof init === 'function') {
        c.set(args[i], init())
      } else return
    }
    c = c.get(args[i])
  }
  return c
}

function memoize (fn) {
  const options = { Cache, depth: fn.length, cache: new Cache() }
  const wrapped = wrap.bind(undefined, fn, options)
  return Object.assign(wrapped, options)
}

module.exports = {
  memoize
}
