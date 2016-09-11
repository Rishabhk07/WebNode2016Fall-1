/**
 * Created by championswimmer on 11/09/16.
 */


var stu0 = new Student();
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.getOlder = function () {
        this.age++
    }
}

var stu2 = new Student("Arnav", 22, "Elixir");

stu2.collegeName= "DTU";
stu2.getCollegeBranch = function () {
    return this.collegeName + ", " + this.course;
};


Student.prototype.collegeName = "DTU";

var stu1 = new Student("Rahul", 15, "Pandora");
var stu3 = new Student("Mohit", 15, "Pandora");

Student.prototype.collegeName = "IIT";
