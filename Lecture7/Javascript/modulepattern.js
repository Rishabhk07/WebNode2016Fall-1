/**
 * Created by championswimmer on 10/09/16.
 */
"use strict";
var Student = (function (n=10, first, last) {
    var age = n || 0;
    var lastName = last || "";
    var firstName = first || "";
    var fullName = function () {
        return firstName + " " + lastName
    };
    
    return {
        setAge: function (n) {
            age = n;
        },
        setName: function(first, last) {
            firstName = first;
            lastName = last;
        },
        getAge: () => (age),
        getName: () => (fullName())
    }
});

var stu = Student(10, "A", "B");
var stu2 = Student(null, "A", "B");
var stuArr = [stu, stu2];



