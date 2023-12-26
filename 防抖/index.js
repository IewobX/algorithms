// 短时间内连续触发 只执行一次

function debounce (fn, delay) {
    let timer = null;
    return function() {
        let args = arguments
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function() {
            fn(...args)
        }, delay)
    }
}

function foo(name) {
    this.name = name
    console.log('name: ', name)
    console.log('this.name: ', this.name)
}

let Bar = debounce(foo, 1000)
let bar;
let interval = setInterval(() => {
    bar = new Bar('xubowei');
}, 300)

setTimeout(() => {
    clearInterval(interval)
}, 5000);