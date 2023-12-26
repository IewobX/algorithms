Function.prototype.apply2 = function(context) {
    var context = context || window;
    context.fn = this;

    var args = arguments[1] instanceof Array ? arguments[1] : [];

    var applyArgs = []
        for(let i = 0; i < args.length; i++) {
        applyArgs.push('args[' + i + ']')
    }

    var result = eval('context.fn(' + applyArgs + ')')
    delete context.fn;
    return result
}

var o = {
    value: 1
}

function foo(name, age) {
    console.log(this.value)
    console.log(name)
    return age
}

let a = foo.apply2(o, ['xubowei', 15])

console.log('a: ', a)