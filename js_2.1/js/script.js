var testQuiz = {
   
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
    },

};


testQuiz.generateNewElem('div', 'container');
testQuiz.generateNewElem('div', 'page-header', 'container');
testQuiz.generateNewElem('h1', 'heading', 'page-header', 0, 'Тест по программированию');
