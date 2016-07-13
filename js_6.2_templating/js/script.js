$(function() {

    var html = $('#testQuiz').html();

    var numQuestions = 3;
    var numAnswers = 3;

    var questions = [];
    var answers = [];

    var title = "Тест по программированию";
    var submitValue = "Проверить мои результаты";

    for (var i = 0; i < numQuestions; i++) {
        questions[i] = {
            question: "Вопрос №" + (i + 1)
        };
    }
    for (var j = 0; j < numAnswers; j++) {
        answers[j] = {
            answer: "Вариант ответа №" + (j + 1)
        };
    }

    var content = tmpl(html, {
        headTitle: title,
        q_data: questions,
        a_data: answers,
        submitData: submitValue
    });
    $('body').append(content);

});
