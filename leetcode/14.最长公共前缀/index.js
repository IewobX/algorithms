// https://leetcode.cn/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';

    let result = strs[0]
    for(let i = 1; i < strs.length; i++) {
        let str = strs[i];

        // 判断str 和 result 的公共前缀
        let j = 0;
        while(j < result.length && result[j] === str[j]) j++;

        result = result.substring(0, j);
    }
 
    return result;
};

strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs)) // 'fl'