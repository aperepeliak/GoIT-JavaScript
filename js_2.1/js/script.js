var testQuiz = {

    LI_NUM: 3, // Number of questions
    CHCKBX_NUM: 3, // Number of options in each question

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
        var element = (ordinalNum) ? (document.getElementsByClassName(className)[ordinalNum]) : (document.getElementsByClassName(className)[0]);

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

        // list-group
        this.generateNewElem('ul', 'list-group', 'quiz_form');

        // list-group-items
        var k = 1; // checkboxes counter
        for (var i = 0; i < this.LI_NUM; i++) {
            var question = 'Вопрос №' + (i + 1);
            this.generateNewElem('li', 'list-group-item count-li-' + (i + 1), 'list-group', 0, question);

            for (var j = 0; j < this.CHCKBX_NUM; j++) {
                var answer = 'Вариант ответа №' + (j + 1);
                this.generateNewElem('div', 'checkbox count-check-' + k, 'list-group-item count-li-' + (i + 1), j);
                this.generateNewElem('label', 'check-label' + k, 'checkbox count-check-' + k, 0);
                this.generateNewElem('input', 'checkbox-input' + k, 'check-label' + k);
                this.generateNewElem('span', 'answer', 'check-label' + k, 1, answer);
                this.addAttribute('type', 'checkbox', 'checkbox-input' + k);

                var checkboxValue = (i + 1) + '_' + (j + 1);
                this.addAttribute('value', checkboxValue, 'checkbox-input' + k);
                k++;
            }
        }

        // button
        this.generateNewElem('input', 'btn btn-primary', 'quiz_form');
        this.addAttribute('type', 'submit', 'btn');
        this.addAttribute('value', 'Проверить мои результаты', 'btn');
    }

};


testQuiz.generate();
