(function ($) {

    $.fn.modalbox = () => {

        let $button = this;
        let $body = $('body');
        let $checking;
        let $tryAgain;
        let $modal;
        let $overlay;

        function showModal(e) {
            // Checking answers
            let $numberOfQuestions = $('.list-group-item').length;
            const correctAnswers = [1, 5, 6];
            $checking = $('.for-checking');
            let countCorrectAnswers = 0;

            for (let i = 0; i < correctAnswers.length; i++) {
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
            for (let value of $checking) {
                value.checked = false;
            }
            $modal.remove();
            $overlay.remove();
        }

        $button.on('click', showModal);

        return this;
    };
})(jQuery);