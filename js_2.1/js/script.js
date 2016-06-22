var testQuiz = {
    generateContainer: function() {
        var div = document.createElement('div');
        div.className = 'container';
        document.body.appendChild(div);
    },
    generateDiv: function(parentElemClassName, newElemClassName) {
        var div = document.createElement('div');
        div.className = newElemClassName;
        var parent = document.querySelector(parentElemClassName);
        parent.appendChild(div);
    },
    generateNewElem: function(newElemType, newElemClassName, parentElemClassName, ordinalNum, innerContent) {
        var newElement = document.createElement(newElemType);

        if (newElemClassName) {
            newElement.className = newElemClassName;
        }

        if (innerContent) {
            newElement.innerHTML = innerContent;
        }

        if (parentElemClassName) {
            var parent = document.getElementsByClassName(parentElemClassName);
            if (parent.length) {
                var ordNum = (ordinalNum > 0 && ordinalNum < parent.length) ? ordinalNum : 0;

                if (ordNum) {
                    parent[ordNum].appendChild(newElement);
                } else {
                    parent[0].appendChild(newElement);
                }
            } else {
                console.log('Error! Wrong parentElemClassName');
            }
        } else {
            document.body.appendChild(newElement);
        }

        // var parentElemClassString = parentElemClassName || 'document.body';


        // parent[ordNum].appendChild(newElement);

    },

};


testQuiz.generateNewElem('div', 'container');
testQuiz.generateNewElem('div', 'page-header', 'container');
testQuiz.generateNewElem('h1', 'heading', 'page-header', 0, 'Тест по программированию');

// testQuiz.generateContainer();
// console.log('container was created');
// testQuiz.generateDiv('.container', 'page-header');
// console.log('a new div was created');

// testQuiz.generateNewElem('div', 'test', 'container', 0);
// console.log('a new div test was created');
// testQuiz.generateNewElem('div', 'test', 'container', 0);
// console.log('a new div test was created');
// testQuiz.generateNewElem('h1', 'heading', 'test', 0);
// console.log('a new div test was created');
// testQuiz.generateNewElem('h1', 'heading', 'test', 1);

// testQuiz.generateNewElem('div', 'wrapper');
// console.log('created wrapper');

// testQuiz.generateNewElem('main');
// console.log('created main');

// testQuiz.generateNewElem('ul', 'menu', 'container', 1);
// console.log('created main');
