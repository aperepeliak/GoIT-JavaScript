
var toLocalStorage = {
    numQuestions: 3,
    numAnswers: 3,
    questions: [],
    answers: [],

    createAnswersList: function () {
        for (var i = 0; i < this.numQuestions; i++) {
            this.answers[i] = [];
        }
            return "created answers list";
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

        return "questions added";
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
            return "testQuiz succesfully created";       
    },
};

// var test = toLocalStorage.generate();
// console.log(test);

try {
    module.exports = toLocalStorage;
} catch (error) {
    console.log("exception for node.js");
}


