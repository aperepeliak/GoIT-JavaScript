'use strict';

(function($) {

    $.fn.modalbox = function() {

        var $button = this;
        var $body = $('body');



        function showModal(e) {
            // Checking answers
            var $numberOfQuestions = $('.list-group-item').length;
            var correctAnswers = [1, 5, 6];
            var $checking = $('.for-checking');
            var countCorrectAnswers = 0;

            for (var i = 0; i<correctAnswers.length; i++) {
            	if ($checking[correctAnswers[i]].checked)
            		countCorrectAnswers++;
            }

            console.log('correct', countCorrectAnswers);

            var $modal = $('<div class="show-modal"><p>Test results:</p></div>');

            e.preventDefault();
            $body.append($modal);
        }

        $button.on('click', showModal);

        return this;
    };

})(jQuery);
