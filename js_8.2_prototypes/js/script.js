function Human(name, age, gender, height, weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

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

var engineer = new Worker('John', 32, 'male', 180, 80, 'Google', 2500);
var sales = new Worker('Chris', 25, 'male', 167, 75, 'Microsoft', 1700);
var bachelor = new Student('Anna', 21, 'female', 175, 68, 'KPI', 150);
var master = new Student('Julia', 22, 'female', 185, 72, 'HNURE', 170);

console.log('engineer = ', engineer);
console.log('sales = ', sales);
console.log('bachelor = ', bachelor);
console.log('master = ', master);

engineer.work();
master.watchTVseries();
