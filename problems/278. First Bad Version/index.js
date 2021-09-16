/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    function findFirstBadVersion(n) {
        let left = 1
        let right = n + 1
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (!isBadVersion(mid)) {
                if (isBadVersion(mid + 1)) return mid + 1
                else left = mid + 1
            } else {
                if (!isBadVersion(mid - 1)) return mid
                else right = mid
            }
        }
    }

    return findFirstBadVersion
}
