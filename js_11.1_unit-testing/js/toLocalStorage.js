(function () {
        var testQuiz = {
            numQuestions: 3,
            numAnswers: 3,
            questions: [],
            answers: [],

            createAnswersList: function () {
                for (var i = 0; i < this.numQuestions; i++) {
                    this.answers[i] = [];
                }
            },

            addQuestions: function () {
                this.questions[0] = { "question": "Какой из этих языков был создан не Аннерсом Хейлсбергом?" };
                this.questions[1] = { "question": "Кто является автором языка C++?" };
                this.questions[2] = { "question": "Автором JavaScript является:" };

                this.answers[0][0] = { "answer": "Delphi" };
                this.answers[0][1] = { "answer": "Haskell" };
                this.answers[0][2] = { "answer": "C#" };

                this.answers[1][0] = { "answer": "Бобби Джонс" };
                this.answers[1][1] = { "answer": "Билл Джой" };
                this.answers[1][2] = { "answer": "Бьёрн Страуструп" };

                this.answers[2][0] = { "answer": "Брендан Эйх" };
                this.answers[2][1] = { "answer": "Гвидо ван Россум" };
                this.answers[2][2] = { "answer": "Павел Дуров" };
            },

            saveToLocalStorage: function () {
                for (var i = 0; i < this.numQuestions; i++) {
                    localStorage.setItem('q' + (i + 1), JSON.stringify(this.questions[i]));
                    for (var j = 0; j < this.numAnswers; j++) {
                        localStorage.setItem('a' + (i + 1) + '.' + (j + 1), JSON.stringify(this.answers[i][j]));
                    }
                }
            },

            generate: function () {
                this.createAnswersList();
                this.addQuestions();
                this.saveToLocalStorage();
                console.log('testQuiz generated');
            },

    };

    testQuiz.generate();
})();




// var numQuestions = 3;
// var numAnswers = 3;
// var questions = new Array(numQuestions);

// var answers = new Array(numQuestions);
// for (var i = 0; i < numQuestions; i++) {
//     answers[i] = new Array(numAnswers);
// }

// questions[0] = { "question": "Какой из этих языков был создан не Аннерсом Хейлсбергом?" };
// questions[1] = { "question": "Кто является автором языка C++?" };
// questions[2] = { "question": "Автором JavaScript является:" };

// answers[0][0] = { "answer": "Delphi" };
// answers[0][1] = { "answer": "Haskell" };
// answers[0][2] = { "answer": "C#" };

// answers[1][0] = { "answer": "Бобби Джонс" };
// answers[1][1] = { "answer": "Билл Джой" };
// answers[1][2] = { "answer": "Бьёрн Страуструп" };

// answers[2][0] = { "answer": "Брендан Эйх" };
// answers[2][1] = { "answer": "Гвидо ван Россум" };
// answers[2][2] = { "answer": "Павел Дуров" };

// for (var i = 0; i < numQuestions; i++) {
//     localStorage.setItem('q' + (i + 1), JSON.stringify(questions[i]));
//     for (var j = 0; j < numAnswers; j++) {
//         localStorage.setItem('a' + (i + 1) + '.' + (j + 1), JSON.stringify(answers[i][j]));
//     }
// }