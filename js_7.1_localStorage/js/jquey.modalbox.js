'use strict';

(function($) {

	$.fn.modalbox = function() {

		var $button = this;
		var $body = $('body');

		var $numQ = $('.list-group-item').length;

		console.log('numQ = ', $numQ);

		function showModal() {
			var $modal = $('<div class="show-modal"><p>Test results:</p></div>');
			$body.append($modal); 
		}

		$button.on('click', showModal);

		return this;
	};

})(jQuery);