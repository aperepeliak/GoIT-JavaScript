var arrNames = [];
var numUsers = 5;
for (var i = 0; i < numUsers; i++) {
    arrNames[i] = prompt('Enter any name: ', 'User');
    console.log('arrNames[i] = ', arrNames[i]);
}

console.log('----------------');

var inputName = prompt('Please, enter your name: ', 'User');

var foundName = false;

for (var i = 0; i < numUsers; i++) {
    if (inputName === arrNames[i]) {
        foundName = true;
    }
}

if (foundName) {
    var message = inputName + ', you have successfully logged in';
    alert(message);
} else {
    alert('Error! There is no such name.');
}
