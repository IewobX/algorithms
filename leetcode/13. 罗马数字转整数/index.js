// https://leetcode.cn/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L':50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let sum = 0;
    let i = 0;

    while(i < s.length) {
        const current = map[s[i]];
        const next = s[i+1] ? map[s[i+1]] : 0;

        if(current < next) {
            sum += next - current
            i += 2;
        } else {
            sum += current;
            i++;
        }
    }

    return sum;
};