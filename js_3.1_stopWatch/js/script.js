var milliseconds = document.getElementsByClassName('milisecs')[0];
var seconds = document.getElementsByClassName('seconds')[0];
var minutes = document.getElementsByClassName('minutes')[0];
var hours = document.getElementsByClassName('hours')[0];

var startButton = document.getElementsByClassName('btn-success')[0];
var clearButton = document.getElementsByClassName('btn-danger')[0];

var switchStartPause = true;
var invokeClear = false;

var k = 0;

var scnds = 0;
var mnts = 0;
var hrs = 0;

function startHandler() {

    function timer() {

        if ((k % 1000) === 0) {
            milliseconds.innerHTML = '000';
        } else {
            milliseconds.innerHTML = k % 1000;
        }

        scnds = Math.floor(k / 1000);
        seconds.innerHTML = (scnds < 10)? ('0' + scnds) : (scnds);

        if (switchStartPause) {
            clearInterval(msTimer);
        }

        if (invokeClear) {
            clearInterval(msTimer);
            invokeClear = false;
        }
        k++;
    }

    var msTimer = setInterval(timer, 1);
    if (switchStartPause) {
        startButton.className = 'btn btn-warning btn-sm';
        startButton.innerHTML = 'Pause';
        switchStartPause = false;
    } else {
        clearInterval(msTimer);
        startButton.className = 'btn btn-success btn-sm';
        startButton.innerHTML = 'Start';
        switchStartPause = true;
    }
}

function clearHandler() {
    invokeClear = true;

    k = 0;
    milliseconds.innerHTML = '000';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';

    startButton.className = 'btn btn-success btn-sm';
    startButton.innerHTML = 'Start';
    switchStartPause = true;
    invokeClear = false;
}

startButton.addEventListener('click', startHandler);
clearButton.addEventListener('click', clearHandler);
