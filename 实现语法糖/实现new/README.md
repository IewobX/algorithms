# 实现 new #

首先思考，什么场景下会使用到new？

```javascript
let obj = new Object(); // 创建对象
let arr = new Array(); // 创建数组

function Person() {
    this.age = 18;
    this.name = 'Bob'
}
let person = new Person();
```

思考上面的代码，new操作符会返回什么东西？做了那些事情？

1. 他返回了一个对象
2. 这个对象中的属性是构造函数（ Person ）中，this 的属性

尝试去实现 newFactory 函数：

```javascript
// fn 构造函数
// args 构造函数的参数
function newFactory(fn, ...args) {
    let result = {}; // 返回的对象
    // 将构造函数的this指向result，并且以args为入参 执行fn
    fn.call(result, ...args);
    return result;
}
```

执行上面的代码

``` javascript
let person = newFactory(Person);
console.log(person); // {age: 18, name: Bob}
```

看似成功了， 但是执行一下 `new Person(); //  Person {age: 18, name: Bob}` 前面多了一个Person

而且当我们向构造函数 Person 的原型链上添加属性/方法的时候，返回的对象是无法继承该属性/方法的

``` javascript
function Person(name, age) {this.name = name; this.age = age};
Person.prototype.laugh = 'hahahahaha';

let person = newFactory(Person);
console.log(person, 'Bob', 18); // {age: 18, name: Bob}
console.log(person.laugh); // undefined
```

可以看到 Person原型链上的属性laugh为undefined

于是我们继续改造代码

```javascript
// fn 构造函数
// args 构造函数的参数
function newFactory(fn, ...args) {
    let result = {}; // 返回的对象
    //将构造函数的原型赋值给result
    result.__proto__ = fn.prototype;
    // 将构造函数的this指向result，并且以args为入参 执行fn
    fn.call(result, ...args);
    return result;
}
```

继续执行刚才的代码验证

``` javascript
function Person(name, age) {this.name = name; this.age = age};
Person.prototype.laugh = 'hahahahaha';

let person = newFactory(Person);
console.log(person, 'Bob', 18); // {age: 18, name: Bob}
console.log(person.laugh); // hahahahaha
```

貌似已经完成了，但是忽略了一个场景：构造函数返回对象的情况。  
我们知道，当构造函数不返回对象时，new会返回构造函数的this，当构造函数返回一个对象时，new会返回这个对象

继续完善 newFactory  

``` javascript
// fn 构造函数
// args 构造函数的参数
function newFactory(fn, ...args) {
    let result = {}; // 返回的对象
    //将构造函数的原型赋值给result
    result.__proto__ = fn.prototype;
    // 将构造函数的this指向result，并且以args为入参 执行fn
    let obj = fn.call(result, ...args);
    return typeof obj === 'object' ? obj : result;
}
```

以上
