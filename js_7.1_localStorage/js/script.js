'use strict';

$(function() {

    var html = $('#testQuiz').html();

    var numQuestions = 3;
    var numAnswers = 3;

    var qstns = new Array(numQuestions);
    var answrs = new Array(numQuestions);
    for (var i = 0; i < numQuestions; i++) {
        answrs[i] = new Array(numAnswers);
    }

    var title = "Тест по программированию";
    var submitValue = "Проверить мои результаты";

    for (var i = 0; i < numQuestions; i++) {
        qstns[i] = JSON.parse(localStorage.getItem('q' + (i + 1)));
        for (var j = 0; j < numAnswers; j++) {
            answrs[i][j] = JSON.parse(localStorage.getItem('a' + (i + 1) + '.' + (j + 1)));
        }
    }

    var content = tmpl(html, {
        headTitle: title,
        q_data: qstns,
        a_data: answrs,
        submitData: submitValue
    });
    $('body').append(content);

});
