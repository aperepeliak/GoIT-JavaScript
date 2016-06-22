var testQuiz = {
	generateContainer: function () {
		var div = document.createElement('div');
		div.className = 'container';
		document.body.appendChild(div);
	},

};

testQuiz.generateContainer();
console.log('container was created');
