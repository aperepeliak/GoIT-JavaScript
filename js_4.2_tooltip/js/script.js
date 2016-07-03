$(function() {

    var $firstName = $('.firstName');
    var $lastName = $('.lastName');
    var $address = $('.address');
    
    var $tip1 = $('.tip-1');
    var $tip2 = $('.tip-2');
    var $tip3 = $('.tip-3');
    

    // tip 1


    $firstName.on('mouseover', function() {
        $tip1.animate({ 'opacity': '1' });

        // $tip1.css('display', 'block');
        $tip2.css('opacity', '0');
        $tip3.css('opacity', '0');
    });
    $firstName.on('mouseout', function() {
        $tip1.css('opacity', '0');
    });

    // tip 2
    $lastName.on('mouseover', function() {
        $tip2.animate({ 'opacity': '1' });
        $tip1.css('opacity', '0');
        $tip3.css('opacity', '0');
    });
    $lastName.on('mouseout', function() {
        $tip2.css('opacity', '0');
    });

    // tip 3
    $address.on('mouseover', function() {
        $tip3.animate({ 'opacity': '1' });
        $tip1.css('opacity', '0');
        $tip2.css('opacity', '0');
    });
    $address.on('mouseout', function() {
        $tip3.css('opacity', '0');
    });

    // Show help
    $('.showHelp').on('click', function() {
        $('.tips').css({
            opacity: '1'
        });
    });

});
