/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 每个右括号都有一个对应的相同类型的左括号。
 * 小括号不能包含中括号、大括号，中括号不能包含大括号
 */
const fn = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        const top = stack[stack.length - 1];

        if(['{', '[', '('].includes(current)) {
            if(!top || current < top) {
                stack.push(current);
            } else {
                return false
            }
        } else {
            if((top === '{' && current === '}' || top === '[' && current === ']' || top === '(' && current === ')')) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return !stack.length;
}

console.log(fn('{[()()][]}')); // true
console.log(fn('{[()(]][]}')); // false
console.log(fn('{[()[]][]}')); // false