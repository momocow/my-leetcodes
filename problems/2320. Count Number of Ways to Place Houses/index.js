const MOD = 10 ** 9 + 7;

function plus (a, b) {
  return (a + b) % MOD;
}

function multiply (a, b) {
  let res = 0;
  while (b > 0) {
    const r = b % 2;
    if (r === 1) {
      res = (res + a) % MOD;
    }
    a = (a * 2) % MOD;
    b = (b - r) / 2;
  }
  return res;
}

/**
 * @param {number} n
 * @return {number}
 */
var countHousePlacements = function(n) {
    // the number of ways whose last plot is empty
    let empty = 1;
    // the number of ways whose last plot has a house
    let house = 1;
    
    while (--n) {
        [empty, house] = [plus(empty, house), empty];
    }
    
    const waysPerSide = empty + house;
    return multiply(waysPerSide, waysPerSide);
};

module.exports = countHousePlacements;
