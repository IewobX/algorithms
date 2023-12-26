Function.prototype.call2 = function(context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args + ')');

    delete context.fn
    return result;
}

var o = {
    value: 2
}

function foo(name) {
    console.log(this.value)
    console.log(name)

    return this.value;
}

let a = foo.call2(o, 'xubowei', '123')

console.log('a:', a)
