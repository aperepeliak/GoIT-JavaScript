$(function () {

    // Carousel
    $('.jcarousel').jcarousel();

    $( "#accordion" ).accordion();

    $('.jcarousel-pagination')
    .on('.jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
        console.log('test');
    })
    .on('.jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    })    
    .jcarouselPagination({
        item: function (page) {
            return '<a class="pgs" href="#' + page + '">' + '<span class="pages page-' + page + '" style="display:block; width:8px; height:8px; background-color:#000;"></span>' + '</a>';
        }
    });
    // $pgs = $('.pgs');
    // $pages = $('.pages');

    // $pages.eq(0).addClass('active');

    // $pgs.eq(0).on('click', function () {
    //     $pages.removeClass('active');
    //     $pages.eq(0).addClass('active');
    // });

    // $pgs.eq(1).on('click', function () {
    //     $pages.removeClass('active');
    //     $pages.eq(1).addClass('active');
    // });

    // $pgs.eq(2).on('click', function () {
    //     $pages.removeClass('active');
    //     $pages.eq(2).addClass('active');
    // });

    $('.jcarousel > ul').css({ "top": "0", "left": "0" });

});

