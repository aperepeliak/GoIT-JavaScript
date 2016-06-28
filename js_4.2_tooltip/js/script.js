$(function() {

    // tip 1
    $('.firstName').on('mouseover', function() {
        $('.tip-1').slideToggle();
    });
    $('.firstName').on('mouseout', function() {
        $('.tip-1').slideToggle();
    });

    // tip 2
    $('.lastName').on('mouseover', function() {
        $('.tip-2').slideToggle();
    });
    $('.lastName').on('mouseout', function() {
        $('.tip-2').slideToggle();
    });

    // tip 3
    $('.address').on('mouseover', function() {
		$('.tip-3').slideToggle();
	});
	$('.address').on('mouseout', function() {
		$('.tip-3').slideToggle();
	});

});
