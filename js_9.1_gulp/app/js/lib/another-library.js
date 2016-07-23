function Worker(name, age, gender, height, weight, workPlace, salary) {
    Human.apply(this, arguments);
    this.workPlace = workPlace;
    this.salary = salary;
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function() {
    console.log(this.name + ' is working');
};

function Student(name, age, gender, height, weight, studyPlace, allowance) {
    Human.apply(this, arguments);
    this.studyPlace = studyPlace;
    this.allowance = allowance;
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.watchTVseries = function() {
    console.log(this.name + ' is watching tv series');
};