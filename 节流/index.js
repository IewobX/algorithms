// 频繁触发函数 隔一段时间执行一次
function throttle(fn, delay) {
    let timer = null;
    return function() {
        let args = arguments;
        if(timer) {
            return;
        }
        timer = setTimeout(function() {
            fn(...args);
            timer = null
        }, delay);
    }
}

function foo(name) {
    this.name = name;
    console.log(this.name);
}

let bar = throttle(foo, 1000)
setInterval(() => {
    bar('xuboweic');
}, 100);