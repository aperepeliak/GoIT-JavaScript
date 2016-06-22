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

    addAttribute: function(attrName, attrValue, className, ordinalNum) {
        var element = (ordinalNum) 	? (document.getElementsByClassName(className)[ordinalNum]) 
        							: (document.getElementsByClassName(className)[0]);
        
        var att = document.createAttribute(attrName);
        att.value = attrValue;
        element.setAttributeNode(att);
    },

    generate: function() {

    	// container 
        this.generateNewElem('div', 'container');

        // header
        this.generateNewElem('div', 'page-header', 'container');
        this.generateNewElem('h1', 'heading', 'page-header', 0, 'Тест по программированию');

        // form
        this.generateNewElem('form', 'quiz_form', 'container');
        this.addAttribute('action', '#', 'quiz_form');
		this.addAttribute('method', 'GET', 'quiz_form');
    }

};


testQuiz.generate();

