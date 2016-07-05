$(function () {
	$('.dropdown').on('mouseover', function() {
		$('.sub-menu').css({
			display: 'block',
			backgroundColor: '#FF6464'
		});
		$('.sub-menu').animate({
			height: '100px',
			top: '30px'
		}, 100, 'easeInSine');
	});

	$('.dropdown').on('mouseout', function() {
		$('.sub-menu').animate({
			height: '0px'
		}, 100, 'easeInSine');

		$('.sub-menu').css({
			display: 'none'
		});


	});
});