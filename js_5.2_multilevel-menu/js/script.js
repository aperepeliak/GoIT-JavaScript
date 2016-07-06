$(function() {

    var $dropdown = $('.dropdown');
    var $dropMenu = $('.down-menu');

    var $dropright = $('.dropright');
    var $rightMenu = $('.right-menu');


    $dropdown.on('mouseover', function() {
        $dropMenu.addClass('down-menu-animated');
    });

    $dropright.on('mouseover', function() {
        $rightMenu.addClass('right-menu-animated');
        $dropMenu.css('overflow', 'visible');
    });

    $dropright.on('mouseout', function() {
        $rightMenu.removeClass('right-menu-animated');
        $dropMenu.css('overflow', 'hidden');
    });

    $dropdown.on('mouseout', function() {
        $dropMenu.removeClass('down-menu-animated');
    });

});
