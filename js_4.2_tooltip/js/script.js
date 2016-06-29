$(function() {

    // tip 1
    $('.firstName').on('mouseover', function() {
        $('.tip-1').css('display', 'block');
        $('.tip-2').css('display', 'none');
        $('.tip-3').css('display', 'none');
    });
    $('.firstName').on('mouseout', function() {
        $('.tip-1').css('display', 'none');
    });

    // tip 2
    $('.lastName').on('mouseover', function() {
        $('.tip-2').css({
            display: 'block',
            marginTop: '49px'
        });
        $('.tip-1').css('display', 'none');
        $('.tip-3').css('display', 'none');
    });
    $('.lastName').on('mouseout', function() {
        $('.tip-2').css('display', 'none');
    });

    // tip 3
    $('.address').on('mouseover', function() {
        $('.tip-3').css({
            display: 'block',
            marginTop: '99px'
        });
        $('.tip-1').css('display', 'none');
        $('.tip-2').css('display', 'none');
    });
    $('.address').on('mouseout', function() {
        $('.tip-3').css('display', 'none');
    });

    // Show help
    $('.showHelp').on('click', function() {
        $('.tips').css({
            display: 'block',
            marginTop: '0'
        });
    });

});
