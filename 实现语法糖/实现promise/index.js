function PromiseA(fn) {
    var value = null, callbacks = [];

    this.then = function(onFulfilled) {
        callbacks.push(onFulfilled)
    }

    function resolve(value) {
        setTimeout(() => {
            callbacks.forEach(function(callback) {
                callback(value)
            })
        }, 0)
    };

    fn(resolve);
}

var promiseA = new PromiseA((resolve) => {
    resolve('执行');
})
promiseA.then((msg) => {
    console.log(msg);
})

