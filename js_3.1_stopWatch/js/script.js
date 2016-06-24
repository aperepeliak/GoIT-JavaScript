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

        if (switchStartPause) {
            clearInterval(msTimer);
        }

        if (invokeClear) {
            clearInterval(msTimer);
            invokeClear = false;
        }

        if (k === 999) {
            k = 0;
            if (scnds === 59) {
                scnds = 0;
                if (mnts == 59) {
                    if (hrs === 23) {
                        hrs = 0;
                    } else {
                        hrs++;
                    }
                } else {
                    mnts++;
                }
            } else {
                scnds++;
            }
        }

        if (k < 10) {
            milliseconds.innerHTML = '0' + '0' + k;
        } else if (k < 100) {
            milliseconds.innerHTML = '0' + k;
        } else {
            milliseconds.innerHTML = k;
        }

        if (scnds < 10) {
            seconds.innerHTML = '0' + scnds;
        } else {
            seconds.innerHTML = scnds;
        }

        if (mnts < 10) {
            minutes.innerHTML = '0' + mnts;
        } else {
            minutes.innerHTML = mnts;
        }

        if (hrs < 10) {
            hours.innerHTML = '0' + hrs;
        } else {
            hours.innerHTML = hrs;
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
    k = 0;
    scnds = 0;
    mnts = 0;
    hrs = 0;
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
