function xor (x = '0', y = '0') {
    return x === '0' ? y : y === '0' ? '1' : '0';
}

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = '';
    let car;
    let i = 1;
    while (true) {
        if (
            a.length - i < 0 &&
            b.length - i < 0 &&
            car !== '1'
        ) {
            break;
        }
        const ai = a[a.length - i] ?? '0';
        const bi = b[b.length - i] ?? '0';
        ans = xor(xor(ai, bi), car) + ans;
        car = ai === '0'
            ? String(Number(bi === '1' && car === '1'))
            : String(Number(bi === '1' || car === '1'));
        i++;
    }
    return ans;
};

module.exports = addBinary;
