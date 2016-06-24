var k = 0;
var milliseconds = document.getElementsByClassName('milisecs')[0];
var seconds = document.getElementsByClassName('seconds')[0];
var minutes = document.getElementsByClassName('minutes')[0];
var hours = document.getElementsByClassName('hours')[0];

var startButton = document.getElementsByClassName('btn-success')[0];
function timer() {
	k++;

	if (!Math.floor(k / 10)) {
		milliseconds.innerHTML = '0' + '0' + k;
	} else if (!Math.floor(k / 100)) {
		milliseconds.innerHTML = '0' + k;
	} else {
		milliseconds.innerHTML = k % 1000;
	}



	// seconds.innerHTML = k/1000;
}

var flag = true;

function startHandler() {
	var msTimer = setInterval(timer, 1);
	if (flag) {
		startButton.className = 'btn btn-warning btn-sm';
		startButton.innerHTML = 'Pause';
		flag = false;

	} else {
		startButton.className = 'btn btn-success btn-sm';
		startButton.innerHTML = 'Start';

		clearInterval(msTimer);
		flag = true;
	}
}

 

startButton.addEventListener('click', startHandler);

