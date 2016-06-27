$(function () {

	// Tab-1 active
	$('.link-1').on('click', function() {
		$('.tab-1').css('display', 'block');
		$('.tab-2').css('display', 'none');
		$('.tab-3').css('display', 'none');
		console.log('clicked tab 1');
	});

	// Tab-2 active
	$('.link-2').on('click', function() {
		$('.tab-1').css('display', 'none');
		$('.tab-2').css('display', 'block');
		$('.tab-3').css('display', 'none');
		console.log('clicked tab 2');
	});

	// Tab-3 active
	$('.link-3').on('click', function() {
		$('.tab-1').css('display', 'none');
		$('.tab-2').css('display', 'none');
		$('.tab-3').css('display', 'block');
		console.log('clicked tab 3');
	});

});