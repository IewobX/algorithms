// https://leetcode-cn.com/problems/first-bad-version/

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
    return function(n) {
        let base = 0, m = 0;

        while(base!=n) {
            m = base + Math.floor((n - base) / 2);
            if(isBadVersion(m)) n = m;
            else base = m + 1;
        }
        return n;
    };
};