/**
 * @author xubowei
 * 实现bind函数
 * 参考： https://github.com/mqyqingfeng/Blog/issues/12
*/
Function.prototype.bind2 = function(context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    
    var self = this; // this应该指向调用bind方法的函数
    var args = Array.prototype.slice.call(arguments, 1);

    var fBound = function() {
        // console.log(this)
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
    }

    var FNOP = function() {};
    FNOP.prototype = this.prototype;
    fBound.prototype = new FNOP();
    return fBound;
}

var value = 2;
let o = {
    value: 'ovalue'
}

function Bar(name, age) {
    this.habit = 'shopping'
    console.log(this.value);
    console.log(name);
    console.log(age);
}
Bar.prototype.name = 'pname'

// let Foo = Bar.bind2(o, 'xubowei')
let Foo = Bar.bind2(o, 'xubowei')

// Foo();
let f1 = new Foo('18');    

// console.log(f1.name);