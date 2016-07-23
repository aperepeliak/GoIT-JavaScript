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