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