/**
 * @author xubowei 
 * 手动实现new
 * 参考： https://github.com/mqyqingfeng/Blog/issues/13
 * 
 */

function objectFactory() {
    let result = {};
    let Constructor = [].shift.call(arguments);

    result.__proto__ = Constructor.prototype;

    let obj = Constructor.apply(result, arguments);


    return typeof obj === 'object' ? obj : result;
}

function Student(name, age) {
    this.strength = 60;
    this.age = age;

    return {
        name: name,
        habit: 'Games'
    }
}

Student.prototype.friend = 'slt'

// let student = new Student('xubowei', 18)

let student = objectFactory(Student, 'xubowei', '18')

console.log(student.strength, student.age, student.friend, student.name, student.habit)