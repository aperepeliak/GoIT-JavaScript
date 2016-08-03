'use strict';

(function ($) {

    $.fn.modalbox = function () {

        var $button = this;
        var $body = $('body');
        var $checking;
        var $tryAgain;
        var $modal;
        var $overlay;

        function showModal(e) {
            // Checking answers
            var $numberOfQuestions = $('.list-group-item').length;
            var correctAnswers = [1, 5, 6];
            $checking = $('.for-checking');
            var countCorrectAnswers = 0;

            for (var i = 0; i < correctAnswers.length; i++) {
                if ($checking[correctAnswers[i]].checked) countCorrectAnswers++;
            }

            $tryAgain = $('<input class="btn btn-success tryAgain" type="submit" value="Пройти тест заново">');

            if (Math.round(countCorrectAnswers / $numberOfQuestions * 100) === 100) {
                $modal = $('<div class="show-modal"><p>Тест пройден!</p><p class="res">Результат: ' + Math.round(countCorrectAnswers / $numberOfQuestions * 100) + '%' + '</p></div>');
            } else {
                $modal = $('<div class="show-modal"><p>Тест не пройден!</p><p class="res">Результат: ' + Math.round(countCorrectAnswers / $numberOfQuestions * 100) + '%' + '</p></div>');
            }

            $overlay = $('<div class="modal-overlay">');
            e.preventDefault();
            $body.append($overlay);
            $body.append($modal);
            $modal.append($tryAgain);
            $tryAgain.one('click', hideModal);
        }

        function hideModal() {
            for (var i = 0; i < $checking.length; i++) {
                $checking[i].checked = false;
            }
            $modal.remove();
            $overlay.remove();
        }

        $button.on('click', showModal);

        return this;
    };
})(jQuery);
'use strict';

$(function () {

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

    $('.modalbox').modalbox();
});
"use strict";

var numQuestions = 3;
var numAnswers = 3;
var questions = new Array(numQuestions);

var answers = new Array(numQuestions);
for (var i = 0; i < numQuestions; i++) {
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

for (var i = 0; i < numQuestions; i++) {
    localStorage.setItem('q' + (i + 1), JSON.stringify(questions[i]));
    for (var j = 0; j < numAnswers; j++) {
        localStorage.setItem('a' + (i + 1) + '.' + (j + 1), JSON.stringify(answers[i][j]));
    }
}