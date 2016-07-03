$(function () {

	var $link1 = $('.link-1');
	var $link2 = $('.link-2');
	var $link3 = $('.link-3');

	var $tab1 = $('.tab-1');
	var $tab2 = $('.tab-2');
	var $tab3 = $('.tab-3');

	// Tab-1 active
	$link1.on('click', function() {
		$tab1.css('display', 'block');
		$tab2.css('display', 'none');
		$tab3.css('display', 'none');
		$(this).parent().addClass('active');
		$link2.parent().removeClass('active');
		$link3.parent().removeClass('active');
	});

	// Tab-2 active
	$link2.on('click', function() {
		$tab1.css('display', 'none');
		$tab2.css('display', 'block');
		$tab3.css('display', 'none');
		$(this).parent().addClass('active');
		$link1.parent().removeClass('active');
		$link3.parent().removeClass('active');
	});

	// Tab-3 active
	$link3.on('click', function() {
		$tab1.css('display', 'none');
		$tab2.css('display', 'none');
		$tab3.css('display', 'block');
		$(this).parent().addClass('active');
		$link1.parent().removeClass('active');
		$link2.parent().removeClass('active');
	});

});