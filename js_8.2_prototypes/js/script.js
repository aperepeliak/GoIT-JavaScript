function Human(config) {
    this.name = config.name;
    this.age = config.age;
    this.gender = config.gender;
    this.height = config.height;
    this.weight = config.weight;
}

function Worker(config) {
    Human.apply(this, [config]);
    this.workPlace = config.workPlace;
    this.salary = config.salary;
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function() {
    console.log(this.name + ' is working');
};

function Student(config) {
    Human.apply(this, [config]);
    this.studyPlace = config.studyPlace;
    this.allowance = config.allowance;
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.watchTVseries = function() {
    console.log(this.name + ' is watching tv series');
};

var john = {
    name: 'John',
    age: 32,
    gender: 'male',
    height: 180,
    weight: 80,
    workPlace: 'Google',
    salary: 2500
};

var chris = {
    name: 'Chris',
    age: 25,
    gender: 'male',
    height: 167,
    weight: 75,
    workPlace: 'Microsoft',
    salary: 1700
};

var anna = {
    name: 'Anna',
    age: 21,
    gender: 'female',
    height: 175,
    weight: 68,
    studyPlace: 'KPI',
    salary: 150
};

var julia = {
    name: 'Julia',
    age: 22,
    gender: 'female',
    height: 185,
    weight: 72,
    studyPlace: 'HNURE',
    salary: 170
};

var engineer = new Worker(john);
var sales = new Worker(chris);
var bachelor = new Student(anna);
var master = new Student(julia);

console.log('engineer = ', engineer);
console.log('sales = ', sales);
console.log('bachelor = ', bachelor);
console.log('master = ', master);

engineer.work();
master.watchTVseries();
