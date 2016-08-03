const numQuestions = 3;
const numAnswers = 3;
let questions = new Array(numQuestions);

let answers = new Array(numQuestions);
for (let i = 0; i < numQuestions; i++) {
    answers[i] = new Array(numAnswers);
}

questions[0] = { "question": "Какой из этих языков был создан не Аннерсом Хейлсбергом?" };
questions[1] = { "question": "Кто является автором языка C++?" };
questions[2] = { "question": "Автором JavaScript является:" };

answers[0][0] = { "answer": "Delphi" };
answers[0][1] = { "answer": "Haskell" };
answers[0][2] = { "answer": "C#" };

answers[1][0] = { "answer": "Бобби Джонс" };
answers[1][1] = { "answer": "Билл Джой" };
answers[1][2] = { "answer": "Бьёрн Страуструп" };

answers[2][0] = { "answer": "Брендан Эйх" };
answers[2][1] = { "answer": "Гвидо ван Россум" };
answers[2][2] = { "answer": "Павел Дуров" };

for (let i = 0; i < numQuestions; i++) {
    localStorage.setItem(`q${i + 1}`, JSON.stringify(questions[i]));
    for (let j = 0; j < numAnswers; j++) {
        localStorage.setItem(`a${i + 1}.${j + 1}`, JSON.stringify(answers[i][j]));
    }
}