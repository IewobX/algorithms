// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 1, result = 1;
    while(r < s.length) {
        let temp = s.substr(l, r - l);
        let index = temp.indexOf(s[r]);
        if(index !== -1) {
            l += (index + 1);
            r = l + result;
        } else {
            r++;
            result++;
        }
    }
    return result;
};

let a = lengthOfLongestSubstring("abcabcbb");
console.log(a);