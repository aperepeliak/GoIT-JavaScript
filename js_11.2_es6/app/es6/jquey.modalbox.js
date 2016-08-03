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