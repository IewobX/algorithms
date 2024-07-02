// https://leetcode.cn/problems/valid-parentheses/description/

/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        const top = stack[stack.length - 1];

        if(['{', '[', '('].includes(current)) {
            stack.push(current);
        } else {
            if((top === '{' && current === '}' || top === '[' && current === ']' || top === '(' && current === ')')) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length;
};