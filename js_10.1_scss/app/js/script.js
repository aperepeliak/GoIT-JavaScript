$(function () {

    // Carousel
    $('.jcarousel').jcarousel();

    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">' + '<div class="pages page-' + page + '" style="width:8px; height:8px; background-color:#000;"></div>' + '</a>';
        }
    });

    var $numPages = $('.pages')[0].addClass('active');

    // console.log('number of pages = ', $numPages.length);

    // console.log('$numPages[1] = ', $numPages[1]);

    // $numPages.addClass("active");
    

    // function Paginate () {
    //         for (var j = 0; j < $numPages.length; j++) {
    //             if ($numPages[j].hasClass ("active")) {
    //                 $numPages[j].removeClass("active");
    //             }
    //         }
    //         $numPages[i].addClass("active");

    //     }

    // for (var i = 0; i < $numPages.length; i++) {
    //     $numPages[0].on('click', Paginate);
    // }

});

