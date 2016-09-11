/**
 * Created by championswimmer on 11/09/16.
 */

var stu0 = new Student();

class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
        this.getOlder = function () {
            this.age++
        }
    }
}

class CBStudent extends Student {
    constructor(name, age, course, address) {
        super(name, age, course);
        this.address = address;
    }
}

