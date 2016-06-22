var testQuiz = {
	generateContainer: function () {
		var div = document.createElement('div');
		div.className = 'container';
		document.body.appendChild(div);
	},
	generateDiv: function(parentElemClassName, newElemClassName) {
		var div = document.createElement('div');
		div.className = newElemClassName;
		var parent = document.querySelector(parentElemClassName);
		parent.appendChild(div);
	}

};

testQuiz.generateContainer();
console.log('container was created');
testQuiz.generateDiv('.container', 'page-header');
console.log('a new div was created');
