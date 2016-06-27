$(function () {

	// Tab-1 active
	$('.link-1').on('click', function() {
		$('.tab-1').css('display', 'block');
		$('.tab-2').css('display', 'none');
		$('.tab-3').css('display', 'none');
		$(this).parent().addClass('active');
		$('.link-2').parent().removeClass('active');
		$('.link-3').parent().removeClass('active');
	});

	// Tab-2 active
	$('.link-2').on('click', function() {
		$('.tab-1').css('display', 'none');
		$('.tab-2').css('display', 'block');
		$('.tab-3').css('display', 'none');
		$(this).parent().addClass('active');
		$('.link-1').parent().removeClass('active');
		$('.link-3').parent().removeClass('active');
	});

	// Tab-3 active
	$('.link-3').on('click', function() {
		$('.tab-1').css('display', 'none');
		$('.tab-2').css('display', 'none');
		$('.tab-3').css('display', 'block');
		$(this).parent().addClass('active');
		$('.link-1').parent().removeClass('active');
		$('.link-2').parent().removeClass('active');
	});

});