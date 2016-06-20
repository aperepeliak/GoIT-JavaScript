function myPow(num, power) {
    var res = 1;
    if (num) {
        for (var i = 0; i < power; i++) {
            res *= num;
        }
        return res;
    }
    return res;
}

var userNum = 0;
var userPower = 0;

userNum = prompt('Enter number', 0);
userPower = prompt('Enter power', 0);

console.log('Result = ', myPow(userNum, userPower));
