$(function () {

    $('.jcarousel').jcarousel();

    $( "#accordion" ).accordion();
   
    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a class="pgs" href="#' + page + '">' + '<span class="pages page-' + page + '" style="display:block; width:8px; height:8px; background-color:#000;"></span>' + '</a>';
        }
    });

    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });

    $pgs = $('.pgs');
    $pgs.eq(0).addClass('active');

    $('.jcarousel > ul').css({ "top": "0", "left": "0" });
});

